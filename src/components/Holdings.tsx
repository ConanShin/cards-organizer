import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';
import { Card } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import styles from './Holdings.module.scss';
import { Search, Plus, X } from 'lucide-react';

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
        let className = `${styles.cardItem}`;
        if (card.holder === 'conan') className += ` ${styles.conan}`;
        else className += ` ${styles.chaeji}`;

        if (card.status === CARD_STATUS.USING) className += ` ${styles.using}`;
        else if (card.status === CARD_STATUS.KEEPING) className += ` ${styles.keeping}`;
        else if (card.status === CARD_STATUS.TERMINATED) className += ` ${styles.terminated}`;

        if (selectedCard && selectedCard.id === card.id && selectedCard.name === card.name) { // Simple check, ideally use ID
            className += ` ${styles.selected}`;
        }
        // Since we don't have stable IDs initially, check reference or properties
        if (selectedCard === card) {
            className += ` ${styles.selected}`;
        }

        return className;
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
        // Store will select it automatically
    };

    const handleSearch = () => {
        if (!searchCompany.trim()) {
            alert('카드사명을 입력해주세요.');
            return;
        }

        const companyName = searchCompany.trim();
        const companyCards = cards.filter((card: Card) => {
            return card.name.toLowerCase().includes(companyName.toLowerCase());
        });

        if (companyCards.length === 0) {
            alert(`${companyName} 카드사의 카드를 찾을 수 없습니다.`);
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
                    user: resultCard.holder, // holder is 'conan' | 'chaeji', which extends string
                    status: resultCard.status,
                    terminationDate: resultCard.status === CARD_STATUS.TERMINATED ? resultCard.period.end.toString() : undefined,
                    endDate: resultCard.status !== CARD_STATUS.TERMINATED ? resultCard.period.end.toString() : undefined
                } as SearchResult]
            } as UserSearchResult;
        }).filter((item): item is UserSearchResult => item !== null);

        setSearchResults(results);
    };

    return (
        <div className={styles.holdings}>
            <header className={styles.holdingsHeader}>
                <h2 className={styles.holdingsTitle}>카드 보유 현황</h2>
                <div className={styles.headerControls}>
                    <div className={styles.searchControls}>
                        <div className={styles.searchInputContainer}>
                            <input
                                value={searchCompany}
                                onChange={(e) => setSearchCompany(e.target.value)}
                                className={styles.searchInput}
                                placeholder="카드사명 검색 (예: 삼성, 신한)"
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <button className={styles.searchButton} onClick={handleSearch}>
                                <Search size={16} />
                            </button>
                        </div>
                        {searchResults.length > 0 && (
                            <div className={styles.searchResults}>
                                <div className={styles.searchResultsHeader}>
                                    <h3 className={styles.searchResultsTitle}>{searchCompany} 카드사 검색 결과</h3>
                                    <button className={styles.closeSearchResult} onClick={() => setSearchResults([])}>
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className={styles.searchResultsContent}>
                                    {searchResults.map((userResult: UserSearchResult) => (
                                        <div key={userResult.user} className={styles.userSearchResult}>
                                            <div className={styles.userHeader}>
                                                <h4 className={styles.userName}>{userResult.user}</h4>
                                            </div>
                                            {userResult.results.map(result => (
                                                <div key={result.cardName} className={styles.searchResultItem}>
                                                    <div className={styles.cardInfo}>
                                                        <span className={styles.cardName}>{result.cardName}</span>
                                                    </div>
                                                    <div className={styles.statusInfo}>
                                                        {result.status === 'terminated' ? (
                                                            <span className={styles.terminatedInfo}>
                                                                가장 최근 탈퇴일:
                                                                <span className={styles.terminationDate}> {formatDate(result.terminationDate)} ({getDaysSinceTermination(result.terminationDate)}일 경과)</span>
                                                            </span>
                                                        ) : (
                                                            <span className={styles.usingInfo}>
                                                                탈퇴예정일:
                                                                <span className={styles.endDate}> {formatDate(result.endDate)}</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.headerButtons} style={{ marginTop: '1rem' }}>
                    <div className={styles.filterControls}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={showTerminated}
                                onChange={(e) => setShowTerminated(e.target.checked)}
                                className={styles.checkboxInput}
                            />
                            <span className={styles.checkboxText}>해지된 카드 표시</span>
                        </label>
                    </div>
                    {!isMobile && (
                        <div className={styles.addCardButton} onClick={handleAddNewCard}>
                            <Plus size={20} className={styles.addIcon} />
                            <span className={styles.addText}>새 카드 추가</span>
                        </div>
                    )}
                </div>
            </header>

            <div className={styles.cardsContainer}>
                <div className={styles.userCards}>
                    <h3 className={`${styles.userTitle} ${styles.conanTitle}`}>Conan</h3>
                    <div className={styles.cardsGrid}>
                        {conanCards.map((card: Card, index: number) => (
                            <div
                                key={`conan-${index}`}
                                className={getCardClassName(card)}
                                onClick={() => selectCard(card)}
                            >
                                <div className={styles.cardNameSmall}>{card.name || '새 카드'}</div>
                                <div className={styles.cardStatus}>{getStatusText(card.status)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.userCards}>
                    <h3 className={`${styles.userTitle} ${styles.chaejiTitle}`}>Chaeji</h3>
                    <div className={styles.cardsGrid}>
                        {chaejiCards.map((card: Card, index: number) => (
                            <div
                                key={`chaeji-${index}`}
                                className={getCardClassName(card)}
                                onClick={() => selectCard(card)}
                            >
                                <div className={styles.cardNameSmall}>{card.name || '새 카드'}</div>
                                <div className={styles.cardStatus}>{getStatusText(card.status)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Holdings;
