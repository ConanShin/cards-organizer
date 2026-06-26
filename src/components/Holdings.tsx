import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';
import { Card } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import { Search, Plus, X, CreditCard } from 'lucide-react';

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

    const filterCardsByUser = (holder: 'conan' | 'chaeji') => {
        const userCards = cards.filter(card => card.holder === holder);
        if (showTerminated) return userCards;
        return userCards.filter(card => card.status !== CARD_STATUS.TERMINATED);
    };

    const conanCards = filterCardsByUser('conan');
    const chaejiCards = filterCardsByUser('chaeji');

    const getStatusText = (status: string) => {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        };
        return statusMap[status] || status;
    };

    const getCardCompany = (cardName: string) => cardName.split(' ')[0] || '';

    const handleAddNewCard = () => {
        const tempCard: Card = {
            id: Date.now().toString(),
            name: '',
            depositBank: '',
            annualFee: '',
            monthlyUsage: '',
            automaticDebit: [],
            period: { start: new Date(), end: new Date() },
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
        const companyCards = cards.filter(card => card.name.toLowerCase().includes(companyName.toLowerCase()));

        if (companyCards.length === 0) {
            setSearchMessage(`'${companyName}' 검색 결과 없음`);
            setSearchResults([]);
            return;
        }

        const userGroups = new Map<string, Card[]>();
        companyCards.forEach(card => {
            if (!userGroups.has(card.holder)) userGroups.set(card.holder, []);
            userGroups.get(card.holder)!.push(card);
        });

        const results = Array.from(userGroups.entries()).map(([user, userCards]) => {
            return {
                user,
                results: userCards.map(c => ({
                    company: getCardCompany(c.name),
                    cardName: c.name,
                    user: c.holder,
                    status: c.status,
                    endDate: c.period.end.toString()
                }))
            };
        });

        setSearchResults(results as any);
        setSearchMessage('');
    };

    return (
        <div className="h-full flex flex-col bg-transparent relative z-10">
            <div className="p-4 sm:p-5 border-b border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        <CreditCard size={18} />
                        내 카드
                    </h2>
                    {!isMobile && (
                        <button
                            onClick={handleAddNewCard}
                            className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        >
                            <Plus size={18} />
                        </button>
                    )}
                </div>

                <div className="relative">
                    <div className="relative flex items-center bg-[#1c1c1e] border border-white/10 rounded-lg px-3">
                        <Search size={16} className="text-gray-500" />
                        <input
                            value={searchCompany}
                            onChange={(e) => setSearchCompany(e.target.value)}
                            className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
                            placeholder="카드사 검색"
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                    </div>
                    {/* Search Results */}
                    {searchResults.length > 0 && (
                        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#1c1c1e] border border-white/10 rounded-lg shadow-xl z-50 max-h-[300px] overflow-auto">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#2c2c2e]">
                                <span className="text-xs font-medium text-gray-300">검색 결과</span>
                                <button onClick={() => setSearchResults([])}><X size={14} className="text-gray-400" /></button>
                            </div>
                            <div className="p-2 space-y-2">
                                {searchResults.map(group => (
                                    <div key={group.user}>
                                        <div className="text-[10px] font-medium text-gray-500 uppercase px-2 py-1">{group.user}</div>
                                        {group.results.map((r, i) => (
                                            <div key={i} className="px-3 py-2 bg-white/5 rounded mx-1 text-sm text-gray-300">
                                                {r.cardName}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <label className="flex items-center gap-2 cursor-pointer w-fit">
                    <input type="checkbox" checked={showTerminated} onChange={(e) => setShowTerminated(e.target.checked)} className="rounded border-white/20 bg-[#1c1c1e] text-indigo-500 focus:ring-0" />
                    <span className="text-xs text-gray-400">해지된 카드 보기</span>
                </label>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 custom-scrollbar space-y-6 sm:space-y-8">
                {[
                    { name: 'Conan', cards: conanCards },
                    { name: 'Chaeji', cards: chaejiCards }
                ].map(group => (
                    <div key={group.name} className="space-y-3">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase">{group.name}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {group.cards.map(card => {
                                const isSelected = selectedCard?.id === card.id;
                                let baseClass = "relative aspect-[1.58] p-3 rounded-xl cursor-pointer transition-colors border overflow-hidden flex flex-col justify-between";
                                
                                if (isSelected) baseClass += " border-indigo-500 bg-[#2c2c2e]";
                                else baseClass += " border-white/10 bg-[#1c1c1e] hover:bg-[#2c2c2e]";

                                if (card.status === CARD_STATUS.TERMINATED) baseClass += " opacity-50";

                                return (
                                    <div key={card.id} className={baseClass} onClick={() => selectCard(card)}>
                                        <div>
                                            <div className="text-[10px] text-gray-500 mb-1">{getCardCompany(card.name)}</div>
                                            <div className="text-sm font-medium text-white line-clamp-2 leading-tight">{card.name || '무명 카드'}</div>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] text-gray-400">{getStatusText(card.status)}</span>
                                            <div className="w-6 h-4 rounded bg-white/10 border border-white/5" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Holdings;
