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

    const isLeapYear = (y: number) => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

    const getStartPoint = () => {
        const startOfYear = new Date(year, 0, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysInYear = isLeapYear(year) ? 366 : 365;

        if (startDate.getFullYear() < year) return 0;
        const daysDiff = Math.floor((startDate.getTime() - startOfYear.getTime()) / oneDay);
        return Math.max((daysDiff / daysInYear) * 100, 0);
    };

    const getEndPoint = () => {
        const startOfYear = new Date(year, 0, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysInYear = isLeapYear(year) ? 366 : 365;

        if (endDate.getFullYear() > year) return 100;
        const daysDiff = Math.floor((endDate.getTime() - startOfYear.getTime()) / oneDay);
        return Math.min((daysDiff / daysInYear) * 100, 100);
    };

    const startPoint = getStartPoint();
    const endPoint = getEndPoint();

    const timelineStyle: React.CSSProperties = {
        left: `${startPoint}%`,
        width: `${endPoint - startPoint}%`,
        ...style
    };

    let barColor = 'bg-indigo-500';
    if (card.status === CARD_STATUS.KEEPING) barColor = 'bg-amber-500';
    if (card.status === CARD_STATUS.TERMINATED) barColor = 'bg-gray-600';

    return (
        <div
            className={`absolute h-[28px] flex items-center cursor-pointer hover:opacity-80 transition-opacity ${card.status === CARD_STATUS.TERMINATED ? 'opacity-50' : ''}`}
            style={timelineStyle}
            onClick={() => selectCard(card)}
        >
            <div className={`w-full h-5 rounded-md ${barColor}`} />
            <div className="absolute left-2 w-full overflow-hidden pointer-events-none pr-4 mix-blend-difference">
                <div className="text-[11px] font-medium text-white truncate">
                    {card.name}
                </div>
            </div>
        </div>
    );
};

export default CalendarRow;
