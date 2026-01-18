import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';
import { Card } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import styles from './Information.module.scss';
import CalendarRow from './CalendarRow';
import CardDetail from './CardDetail';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Information: React.FC = () => {
    const cards = useCardsStore((state: CardsState) => state.cards);
    const selectedCard = useCardsStore((state: CardsState) => state.selectedCard);
    const resetSelection = useCardsStore((state: CardsState) => state.resetSelection);

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [isMobile, setIsMobile] = useState(false);

    // Config
    const minYear = 2020;
    const maxYear = new Date().getFullYear() + 5;
    const monthNames = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Filter and Sort Logic from analyzed features
    const visibleCards = (() => {
        const filtered = cards.filter((card: Card) => {
            const startYear = new Date(card.period.start).getFullYear();
            const endYear = new Date(card.period.end).getFullYear();
            return currentYear >= startYear && currentYear <= endYear;
        });

        // Smart Sort: Status > Holder > StartDate
        return filtered.sort((a: Card, b: Card) => {
            // 1. Status: Terminated last
            if (a.status === CARD_STATUS.TERMINATED && b.status !== CARD_STATUS.TERMINATED) return 1;
            if (a.status !== CARD_STATUS.TERMINATED && b.status === CARD_STATUS.TERMINATED) return -1;

            // 2. Holder
            if (a.holder !== b.holder) return a.holder === 'conan' ? -1 : 1;

            // 3. StartDate
            return new Date(a.period.start).getTime() - new Date(b.period.start).getTime();
        });
    })();

    const timelineHeight = (() => {
        const rowHeight = 24;
        const rowSpacing = 2;
        const dividerHeight = 30;

        // Calculate exact height needed
        let totalHeight = 0;
        visibleCards.forEach((card, index) => {
            if (index === 0 || visibleCards[index - 1].holder !== card.holder) {
                totalHeight += dividerHeight;
            }
            totalHeight += rowHeight + rowSpacing;
        });

        return `${Math.max(totalHeight + 100, 400)}px`;
    })();


    const previousYear = () => {
        if (currentYear > minYear) setCurrentYear(prev => prev - 1);
    };

    const nextYear = () => {
        if (currentYear < maxYear) setCurrentYear(prev => prev + 1);
    };

    const getStatusText = (status: string) => {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        };
        return statusMap[status] || status;
    };

    return (
        <div className={styles.information}>
            <div className={styles.informationContent}>
                <section className={styles.calendarSection}>
                    <header className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>카드 보유 기간</h2>
                        <div className={styles.yearNavigation}>
                            <button
                                className={styles.navButton}
                                onClick={previousYear}
                                disabled={currentYear <= minYear}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className={styles.currentYear}>{currentYear}</span>
                            <button
                                className={styles.navButton}
                                onClick={nextYear}
                                disabled={currentYear >= maxYear}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </header>

                    <div className={styles.calendarContainer}>
                        {/* Month Headers */}
                        <div className={styles.monthHeaders}>
                            {monthNames.map((month, index) => (
                                <div key={index} className={styles.monthHeader}>
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Timeline */}
                        <div className={styles.timelineContainer} style={{ height: timelineHeight }}>
                            <div className={styles.timelineGrid}>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <div key={index} className={styles.monthColumn}>
                                        {index !== 0 && <div className={styles.monthDivider}></div>}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.cardsTimeline}>
                                {((): React.ReactNode => {
                                    let currentTop = 0;
                                    const rowHeight = 24;
                                    const rowSpacing = 2;
                                    const dividerHeight = 30;

                                    return visibleCards.map((card: Card, index: number) => {
                                        const isFirstOrDifferent = index === 0 || visibleCards[index - 1].holder !== card.holder;

                                        let dividerElement: React.ReactNode = null;
                                        if (isFirstOrDifferent) {
                                            dividerElement = (
                                                <div
                                                    key={`divider-${card.holder}-${index}`}
                                                    className={`${styles.userDivider} ${card.holder === 'conan' ? styles.dividerConan : styles.dividerChaeji}`}
                                                    style={{ top: `${currentTop}px` }}
                                                >
                                                    <span className={styles.dividerLabel}>
                                                        {card.holder === 'conan' ? 'Conan' : 'Chaeji'}
                                                    </span>
                                                </div>
                                            );
                                            currentTop += dividerHeight;
                                        }

                                        const cardRow = (
                                            <CalendarRow
                                                key={`${card.id || index}-${currentYear}`}
                                                card={card}
                                                year={currentYear}
                                                rowIndex={index}
                                                style={{ top: `${currentTop}px` }}
                                            />
                                        );

                                        currentTop += rowHeight + rowSpacing;

                                        return (
                                            <React.Fragment key={`wrapper-${card.id || index}`}>
                                                {dividerElement}
                                                {cardRow}
                                            </React.Fragment>
                                        );
                                    });
                                })()}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Card Detail Modal Popup */}
            {selectedCard && (
                <div className={styles.modalOverlay} onClick={resetSelection}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitleSection}>
                                <h3 className={styles.modalTitle}>{selectedCard.name || '새 카드'}</h3>
                                <div className={`${styles.modalStatusBadge} ${styles[`status${selectedCard.status.charAt(0).toUpperCase() + selectedCard.status.slice(1)}`]}`}>
                                    {getStatusText(selectedCard.status)}
                                </div>
                            </div>
                            <button className={styles.modalCloseButton} onClick={resetSelection}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <CardDetail />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Information;
