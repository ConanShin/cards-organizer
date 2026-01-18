import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';
import { Card } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import CalendarRow from './CalendarRow';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const Information: React.FC = () => {
    const cards = useCardsStore((state: CardsState) => state.cards);

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
    return (
        <div className="h-full flex flex-col bg-white/5 lg:bg-transparent">
            <section className="flex-1 flex flex-col overflow-hidden">
                <header className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-black/20 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                        <CalendarIcon size={18} className="text-indigo-400" />
                        카드 보유 기간
                    </h2>
                    <div className="flex items-center gap-4 bg-black/40 rounded-xl p-1 border border-white/5">
                        <button
                            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                            onClick={previousYear}
                            disabled={currentYear <= minYear}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <span className="text-sm font-bold text-white min-w-[3rem] text-center">{currentYear}</span>
                        <button
                            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                            onClick={nextYear}
                            disabled={currentYear >= maxYear}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </header>

                <div className="flex-1 flex flex-col overflow-hidden relative">
                    {/* Horizontal Scroll Hint for Mobile */}
                    {isMobile && (
                        <div className="px-6 py-2 bg-indigo-500/5 flex items-center justify-center gap-2 border-b border-white/5 animate-pulse">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            <span className="text-[10px] text-indigo-300 font-medium uppercase tracking-widest">
                                좌우로 스크롤하여 타임라인을 확인하세요
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        </div>
                    )}

                    {/* Timeline Container - Scrollable both ways */}
                    <div className="flex-1 overflow-auto custom-scrollbar relative bg-gradient-to-br from-transparent to-black/20 pb-20 sm:pb-0">
                        {/* Month Headers - Sticky at the top of the scrollable area */}
                        <div className="grid grid-cols-12 border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-0 z-20 min-w-[800px]">
                            {monthNames.map((month, index) => (
                                <div key={index} className="py-3 text-[10px] sm:text-xs text-center font-medium text-gray-500 border-r last:border-r-0 border-white/5">
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Relative wrapper for grid and bars to ensure they share the same min-width */}
                        <div className="relative min-w-[800px]" style={{ height: timelineHeight }}>
                            {/* Vertical Grid Lines */}
                            <div className="absolute inset-0 grid grid-cols-12 pointer-events-none h-full z-0">
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <div key={index} className="h-full border-r last:border-r-0 border-white/5" />
                                ))}
                            </div>

                            <div className="relative z-10 w-full h-full">
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
                                                    className={`
                                                    absolute left-0 right-0 h-[30px] flex items-center px-4 border-b border-white/5
                                                    ${card.holder === 'conan' ? 'bg-indigo-900/10 text-indigo-300' : 'bg-rose-900/10 text-rose-300'}
                                                `}
                                                    style={{ top: `${currentTop}px` }}
                                                >
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
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
                </div>
            </section>
        </div>
    );
};

export default Information;
