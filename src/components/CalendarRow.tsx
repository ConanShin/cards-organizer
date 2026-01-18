import React from 'react';
import { Card } from '@/types/card';
import useCardsStore from '@/store';
import styles from './CalendarRow.module.scss';
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

    const rowHeight = 24;
    const rowSpacing = 2;
    const topPosition = rowIndex * (rowHeight + rowSpacing);

    const timelineStyle: React.CSSProperties = {
        left: `${startPoint}%`,
        width: `${endPoint - startPoint}%`,
        top: `${topPosition}px`,
        ...style
    };

    const holderClass = card.holder === 'conan' ? styles.holderConan : styles.holderChaeji;

    let statusClass = '';
    if (card.status === CARD_STATUS.USING) statusClass = styles.statusUsing;
    else if (card.status === CARD_STATUS.KEEPING) statusClass = styles.statusKeeping;
    else if (card.status === CARD_STATUS.TERMINATED) statusClass = styles.statusTerminated;

    return (
        <div
            className={`${styles.calendarRow} ${holderClass} ${statusClass}`}
            style={timelineStyle}
            onClick={() => selectCard(card)}
        >
            <div className={styles.timelineBar}>
                <div className={styles.dateIndicators}>
                    {showStartDate && <span className={styles.startDate}>{startDateString}</span>}
                    {showEndDate && <span className={styles.endDate}>{endDateString}</span>}
                </div>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardName}>{card.name || '새 카드'}</div>
            </div>
        </div>
    );
};

export default CalendarRow;
