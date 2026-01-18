import React from 'react';
import { Card } from '@/types/card';
import useCardsStore from '@/store';
import { CARD_STATUS } from '@/data/constant';

interface CalendarRowProps {
    card: Card;
    year: number;
    rowIndex: number;
    style?: React.CSSProperties;
}

const CalendarRow: React.FC<CalendarRowProps> = ({ card, year, rowIndex, style }) => {
    const selectCard = useCardsStore(state => state.selectCard);

    const startDate = new Date(card.period.start);
    const endDate = new Date(card.period.end);

    const isVisible = (() => {
        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();
        return year >= startYear && year <= endYear;
    })();

    if (!isVisible) return null;

    const showStartDate = startDate.getFullYear() === year;
    const showEndDate = endDate.getFullYear() === year;

    const startDateString = showStartDate ? startDate.getDate().toString() : '...';
    const endDateString = showEndDate ? endDate.getDate().toString() : '...';

    const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

    const getStartPoint = () => {
        const startOfYear = new Date(year, 0, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysInYear = isLeapYear(year) ? 366 : 365;

        if (startDate.getFullYear() < year) {
            return 0;
        }

        const daysDiff = Math.floor((startDate.getTime() - startOfYear.getTime()) / oneDay);
        return Math.max((daysDiff / daysInYear) * 100, 0);
    };

    const getEndPoint = () => {
        const startOfYear = new Date(year, 0, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysInYear = isLeapYear(year) ? 366 : 365;

        if (endDate.getFullYear() > year) {
            return 100;
        }

        const daysDiff = Math.floor((endDate.getTime() - startOfYear.getTime()) / oneDay);
        return Math.min((daysDiff / daysInYear) * 100, 100);
    };

    const startPoint = getStartPoint();
    const endPoint = getEndPoint();

    const timelineStyle: React.CSSProperties = {
        left: `${startPoint}%`,
        width: `${endPoint - startPoint}%`,
        ...style // Position top is passed from parent now to avoid recalculating here if needed, or we can keep logic.
        // Parent Information.tsx passes style={{ top: ... }} so we use it.
    };

    // Style Generation
    let barColorClass = '';

    // Base color by Holder
    if (card.holder === 'conan') {
        barColorClass = 'bg-gradient-to-r from-indigo-500 to-blue-600 shadow-indigo-500/20';
    } else {
        barColorClass = 'bg-gradient-to-r from-rose-500 to-pink-600 shadow-rose-500/20';
    }

    // Modifications by Status
    let statusClass = 'opacity-100';
    let containerClass = '';

    if (card.status === CARD_STATUS.USING) {
        statusClass = ''; // Default vibrant
    } else if (card.status === CARD_STATUS.KEEPING) {
        barColorClass = 'bg-amber-500/80'; // Keeping is standardized to Amber
        statusClass = 'opacity-90';
    } else if (card.status === CARD_STATUS.TERMINATED) {
        barColorClass = 'bg-gray-600';
        statusClass = 'opacity-50 grayscale';
        containerClass = 'opacity-60';
    }

    return (
        <div
            className={`absolute h-6 flex items-center group cursor-pointer transition-all duration-200 hover:z-20 hover:scale-y-110 ${containerClass}`}
            style={timelineStyle}
            onClick={() => selectCard(card)}
        >
            {/* The Timeline Bar */}
            <div className={`
                relative w-full h-3 rounded-full shadow-lg ${barColorClass} ${statusClass}
                group-hover:h-4 transition-all duration-200
            `}>
                {/* Date Indicators (Tooltips) */}
                <div className="absolute inset-0 flexjustify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-1">
                    {/* Simplified for clean look - showing dates on hover above/below? 
                        Let's keep it simple: date text inside if wide enough, or floating?
                        For now, simple implementation:
                    */}
                </div>

                {/* Date Labels floating above/below on hover */}
                {showStartDate && (
                    <span className="absolute -left-2 -top-5 text-[10px] bg-black/80 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                        {startDate.getMonth() + 1}/{startDate.getDate()}
                    </span>
                )}
                {showEndDate && (
                    <span className="absolute -right-2 -top-5 text-[10px] bg-black/80 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                        {endDate.getMonth() + 1}/{endDate.getDate()}
                    </span>
                )}
            </div>

            {/* Card Name Label - Always visible or on hover? 
                Previous design had it always visible next to the bar? 
                Actually previous design: `cardInfo` inside `calendarRow`.
            */}
            {/* Card Name Label - Visible by default */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none pr-6">
                <div className="text-[10px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] truncate">
                    {card.name}
                </div>
            </div>
        </div>
    );
};

export default CalendarRow;
