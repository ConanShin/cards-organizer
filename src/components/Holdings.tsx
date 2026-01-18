import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';
import { Card } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import { Search, Plus, X, CreditCard, Filter } from 'lucide-react';

interface SearchResult {
    company: string;
    terminationDate?: string;
    endDate?: string;
    user: string;
    status: string;
    cardName: string;
}

interface UserSearchResult {
    user: string;
    results: SearchResult[];
}

const Holdings: React.FC = () => {
    const cards = useCardsStore((state: CardsState) => state.cards);
    const selectCard = useCardsStore((state: CardsState) => state.selectCard);
    const selectedCard = useCardsStore((state: CardsState) => state.selectedCard);
    const addLocalCard = useCardsStore((state: CardsState) => state.addLocalCard);

    // State
    const [showTerminated, setShowTerminated] = useState(false);
    const [searchCompany, setSearchCompany] = useState('');
    const [searchResults, setSearchResults] = useState<UserSearchResult[]>([]);
    const [searchMessage, setSearchMessage] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Filter Logic
    const filterCardsByUser = (holder: 'conan' | 'chaeji') => {
        const userCards = cards.filter(card => card.holder === holder);
        if (showTerminated) return userCards;
        return userCards.filter(card => card.status !== CARD_STATUS.TERMINATED);
    };

    const conanCards = filterCardsByUser('conan');
    const chaejiCards = filterCardsByUser('chaeji');

    // Helper functions
    const getStatusText = (status: string) => {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        };
        return statusMap[status] || status;
    };

    const getCardCompany = (cardName: string) => cardName.split(' ')[0] || '';

    const formatDate = (dateString: string | Date | undefined) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getDaysSinceTermination = (terminationDate: string | Date | undefined) => {
        if (!terminationDate) return 0;
        const today = new Date();
        const termination = new Date(terminationDate);
        const diffTime = today.getTime() - termination.getTime();
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };

    // Card Classes
    const getCardClassName = (card: Card) => {
        let base = "relative aspect-[1.586] p-3 sm:p-4 rounded-xl flex flex-col justify-between cursor-pointer border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl overflow-hidden";

        // Holder Styles
        if (card.holder === 'conan') {
            base += " bg-gradient-to-br from-slate-800/80 to-slate-900/90 border-white/5 hover:border-indigo-400/30";
        } else {
            base += " bg-gradient-to-br from-rose-900/30 to-rose-950/50 border-white/5 hover:border-rose-400/30";
        }

        // Status Styles
        if (card.status === CARD_STATUS.TERMINATED) {
            base += " opacity-60 grayscale-[0.8] hover:opacity-90 hover:grayscale-[0.2] border-dashed";
        } else if (card.status === CARD_STATUS.KEEPING) {
            base += " border-amber-500/20";
        }

        // Selected State
        const isSelected = (selectedCard && selectedCard.id === card.id) || selectedCard === card;
        if (isSelected) {
            base += " ring-2 ring-indigo-500 shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] z-10 scale-[1.02] bg-slate-800";
        }

        return base;
    };

    // Actions
    const handleAddNewCard = () => {
        const tempCard: Card = {
            id: Date.now().toString(), // Temporary ID
            name: '',
            depositBank: '',
            annualFee: '',
            monthlyUsage: '',
            automaticDebit: [],
            period: {
                start: new Date(),
                end: new Date()
            },
            status: CARD_STATUS.USING,
            holder: 'conan',
            selected: true,
            isNew: true
        };
        addLocalCard(tempCard);
    };

    const handleSearch = () => {
        if (!searchCompany.trim()) {
            setSearchMessage('검색어를 입력해주세요.');
            setSearchResults([]);
            return;
        }

        const companyName = searchCompany.trim();
        const companyCards = cards.filter((card: Card) => {
            return card.name.toLowerCase().includes(companyName.toLowerCase());
        });

        if (companyCards.length === 0) {
            setSearchMessage(`'${companyName}'에 대한 검색 결과가 없습니다.`);
            setSearchResults([]);
            return;
        }

        // Group by user
        const userGroups = new Map<string, Card[]>();
        companyCards.forEach((card: Card) => {
            if (!userGroups.has(card.holder)) userGroups.set(card.holder, []);
            userGroups.get(card.holder)!.push(card);
        });

        // Smart selection logic
        const results = Array.from(userGroups.entries()).map(([user, userCards]) => {
            const terminatedCards = userCards.filter(c => c.status === CARD_STATUS.TERMINATED);
            const usingCards = userCards.filter(c => c.status === CARD_STATUS.USING || c.status === CARD_STATUS.KEEPING);

            let resultCard: Card | null = null;

            if (usingCards.length > 0) {
                resultCard = usingCards.reduce((latest, current) => {
                    const latestDate = new Date(latest.period.end);
                    const currentDate = new Date(current.period.end);
                    return currentDate > latestDate ? current : latest;
                });
            } else if (terminatedCards.length > 0) {
                resultCard = terminatedCards.reduce((latest, current) => {
                    const latestDate = new Date(latest.period.end);
                    const currentDate = new Date(current.period.end);
                    return currentDate > latestDate ? current : latest;
                });
            }

            if (!resultCard) return null;

            return {
                user,
                results: [{
                    company: getCardCompany(resultCard.name),
                    cardName: resultCard.name,
                    user: resultCard.holder,
                    status: resultCard.status,
                    terminationDate: resultCard.status === CARD_STATUS.TERMINATED ? resultCard.period.end.toString() : undefined,
                    endDate: resultCard.status !== CARD_STATUS.TERMINATED ? resultCard.period.end.toString() : undefined
                } as SearchResult]
            } as UserSearchResult;
        }).filter((item): item is UserSearchResult => item !== null);

        setSearchResults(results);
        setSearchMessage('');
    };

    const handleCloseSearch = () => {
        setSearchResults([]);
        setSearchMessage('');
        setSearchCompany('');
    };

    return (
        <div className="h-full flex flex-col bg-white/5 lg:bg-transparent">
            {/* Header Section */}
            <div className="p-5 border-b border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                        <CreditCard size={18} className="text-indigo-400" />
                        카드 보유 현황
                    </h2>
                    {!isMobile && (
                        <button
                            onClick={handleAddNewCard}
                            className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 transition-colors"
                            title="새 카드 추가"
                        >
                            <Plus size={18} />
                        </button>
                    )}
                </div>

                {/* Search Bar */}
                <div className="relative z-50">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                        </div>
                        <input
                            value={searchCompany}
                            onChange={(e) => setSearchCompany(e.target.value)}
                            className="block w-full pl-10 pr-10 py-2.5 bg-black/20 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                            placeholder="카드사 검색 (예: 삼성, 신한)"
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white cursor-pointer"
                            onClick={handleSearch}
                        >
                            <div className="bg-white/10 p-1 rounded-md">
                                <span className="text-[10px] font-bold">↵</span>
                            </div>
                        </button>
                    </div>

                    {/* Search Results Dropdown */}
                    {(searchResults.length > 0 || searchMessage) && (
                        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                                    {searchMessage ? '알림' : '검색 결과'}
                                </h3>
                                <button
                                    onClick={handleCloseSearch}
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            </div>

                            <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-2">
                                {searchMessage ? (
                                    <div className="py-6 text-center text-gray-400 text-sm">
                                        {searchMessage}
                                    </div>
                                ) : (
                                    searchResults.map((userResult) => (
                                        <div key={userResult.user} className="mb-3 last:mb-0">
                                            <div className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-widest pl-3">
                                                {userResult.user}
                                            </div>
                                            {userResult.results.map((result, idx) => (
                                                <div key={idx} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-default border border-white/5">
                                                    <div className="font-medium text-gray-200 text-sm mb-1">{result.cardName}</div>
                                                    <div className="text-xs flex items-center gap-2">
                                                        {result.status === 'terminated' ? (
                                                            <>
                                                                <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-400">해지됨</span>
                                                                <span className="text-gray-500">
                                                                    {formatDate(result.terminationDate)} ({getDaysSinceTermination(result.terminationDate)}일 전)
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400">사용중</span>
                                                                <span className="text-gray-500">
                                                                    ~ {formatDate(result.endDate)}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                    <label className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 cursor-pointer hover:bg-white/10 transition-colors select-none group">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                checked={showTerminated}
                                onChange={(e) => setShowTerminated(e.target.checked)}
                                className="peer sr-only"
                            />
                            <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 font-medium">해지된 카드 보기</span>
                    </label>
                </div>
            </div>

            {/* Cards List */}
            <div className="flex-1 overflow-y-auto p-5 pb-20 sm:pb-5 custom-scrollbar space-y-8">
                {/* Conan Section */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 border-l-2 border-indigo-500">
                        Conan
                    </h3>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {conanCards.map((card, index) => (
                            <div
                                key={`conan-${index}`}
                                className={getCardClassName(card)}
                                onClick={() => selectCard(card)}
                            >
                                <div className="relative z-10">
                                    <div className="text-[8px] sm:text-[10px] text-white/50 mb-0.5 sm:mb-1 uppercase tracking-wider">{getCardCompany(card.name)}</div>
                                    <div className="font-bold text-white leading-tight text-[10px] sm:text-sm line-clamp-2">{card.name || '무명 카드'}</div>
                                </div>
                                <div className="mt-2 flex justify-between items-end relative z-10">
                                    <div className={`
                                        text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-md
                                        ${card.status === CARD_STATUS.USING ? 'bg-green-500/20 text-green-300' : ''}
                                        ${card.status === CARD_STATUS.KEEPING ? 'bg-amber-500/20 text-amber-300' : ''}
                                        ${card.status === CARD_STATUS.TERMINATED ? 'bg-red-500/20 text-red-300' : ''}
                                    `}>
                                        {getStatusText(card.status)}
                                    </div>
                                    {/* Chip Graphic Decoration */}
                                    <div className="w-6 h-4 rounded bg-gradient-to-br from-yellow-200/20 to-yellow-500/20 border border-yellow-200/30 opacity-50" />
                                </div>
                                {/* Decorative background elements */}
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chaeji Section */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 border-l-2 border-rose-500">
                        Chaeji
                    </h3>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {chaejiCards.map((card, index) => (
                            <div
                                key={`chaeji-${index}`}
                                className={getCardClassName(card)}
                                onClick={() => selectCard(card)}
                            >
                                <div className="relative z-10">
                                    <div className="text-[8px] sm:text-[10px] text-white/50 mb-0.5 sm:mb-1 uppercase tracking-wider">{getCardCompany(card.name)}</div>
                                    <div className="font-bold text-white leading-tight text-[10px] sm:text-sm line-clamp-2">{card.name || '무명 카드'}</div>
                                </div>
                                <div className="mt-2 flex justify-between items-end relative z-10">
                                    <div className={`
                                        text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-md
                                        ${card.status === CARD_STATUS.USING ? 'bg-green-500/20 text-green-300' : ''}
                                        ${card.status === CARD_STATUS.KEEPING ? 'bg-amber-500/20 text-amber-300' : ''}
                                        ${card.status === CARD_STATUS.TERMINATED ? 'bg-red-500/20 text-red-300' : ''}
                                    `}>
                                        {getStatusText(card.status)}
                                    </div>
                                    <div className="w-6 h-4 rounded bg-gradient-to-br from-yellow-200/20 to-yellow-500/20 border border-yellow-200/30 opacity-50" />
                                </div>
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Holdings;
