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

    const minYear = 2020;
    const maxYear = new Date().getFullYear() + 5;
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const visibleCards = (() => {
        const filtered = cards.filter((card: Card) => {
            const startYear = new Date(card.period.start).getFullYear();
            const endYear = new Date(card.period.end).getFullYear();
            return currentYear >= startYear && currentYear <= endYear;
        });

        return filtered.sort((a: Card, b: Card) => {
            if (a.status === CARD_STATUS.TERMINATED && b.status !== CARD_STATUS.TERMINATED) return 1;
            if (a.status !== CARD_STATUS.TERMINATED && b.status === CARD_STATUS.TERMINATED) return -1;
            if (a.holder !== b.holder) return a.holder === 'conan' ? -1 : 1;
            return new Date(a.period.start).getTime() - new Date(b.period.start).getTime();
        });
    })();

    const timelineHeight = (() => {
        const rowHeight = 28;
        const rowSpacing = 8;
        const dividerHeight = 40;
        let totalHeight = 0;
        visibleCards.forEach((card, index) => {
            if (index === 0 || visibleCards[index - 1].holder !== card.holder) {
                totalHeight += dividerHeight;
            }
            totalHeight += rowHeight + rowSpacing;
        });
        return `${Math.max(totalHeight + 100, 400)}px`;
    })();

    return (
        <div className="h-full flex flex-col bg-transparent relative z-10">
            <section className="flex-1 flex flex-col overflow-hidden">
                <header className="px-4 sm:px-6 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                        <CalendarIcon size={18} />
                        타임라인
                    </h2>
                    
                    <div className="flex items-center gap-1 bg-[#1c1c1e] rounded-lg border border-white/10 p-1">
                        <button
                            className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 disabled:opacity-30"
                            onClick={() => setCurrentYear(prev => Math.max(minYear, prev - 1))}
                            disabled={currentYear <= minYear}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <span className="text-sm font-medium text-white min-w-[3rem] text-center">{currentYear}</span>
                        <button
                            className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 disabled:opacity-30"
                            onClick={() => setCurrentYear(prev => Math.min(maxYear, prev + 1))}
                            disabled={currentYear >= maxYear}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar relative bg-[#111111] pb-24 sm:pb-0">
                    <div className="grid grid-cols-12 border-b border-white/10 bg-[#111111] sticky top-0 z-20 min-w-[800px]">
                        {monthNames.map((month, index) => (
                            <div key={index} className="py-3 text-xs text-center font-medium text-gray-500 border-r last:border-r-0 border-white/10">
                                {month}
                            </div>
                        ))}
                    </div>

                    <div className="relative min-w-[800px]" style={{ height: timelineHeight }}>
                        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none h-full z-0">
                            {Array.from({ length: 12 }).map((_, index) => (
                                <div key={index} className="h-full border-r last:border-r-0 border-white/5" />
                            ))}
                        </div>

                        <div className="relative z-10 w-full h-full pt-4">
                            {((): React.ReactNode => {
                                let currentTop = 16; 
                                const rowHeight = 28;
                                const rowSpacing = 8;
                                const dividerHeight = 40;

                                return visibleCards.map((card: Card, index: number) => {
                                    const isFirstOrDifferent = index === 0 || visibleCards[index - 1].holder !== card.holder;

                                    let dividerElement = null;
                                    if (isFirstOrDifferent) {
                                        dividerElement = (
                                            <div
                                                key={`divider-${card.holder}-${index}`}
                                                className="absolute left-0 right-0 h-[40px] flex items-center px-4 border-y border-white/5 bg-[#1c1c1e]"
                                                style={{ top: `${currentTop}px` }}
                                            >
                                                <span className="text-xs font-semibold text-gray-300 uppercase">
                                                    {card.holder}
                                                </span>
                                            </div>
                                        );
                                        currentTop += dividerHeight + 8;
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
    );
};

export default Information;
