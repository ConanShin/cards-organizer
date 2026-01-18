'use client';

import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';
import styles from './home.module.scss';
import Holdings from '@/components/Holdings';
import Information from '@/components/Information';
import { CreditCard, Calendar } from 'lucide-react';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<'holdings' | 'calendar'>('calendar');

    const loadCards = useCardsStore((state: CardsState) => state.loadCards);

    useEffect(() => {
        loadCards();
    }, [loadCards]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className={styles.page}>
            <header className={styles.appHeader}>
                <h1 className={styles.appTitle}>Card Organizer</h1>
                <p className={styles.appSubtitle}>신용카드 혜택 극대화를 위한 관리 도구</p>
            </header>

            <main className={styles.appMain}>
                {isMobile && (
                    <div className={styles.mobileTabs}>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'holdings' ? styles.active : ''}`}
                            onClick={() => setActiveTab('holdings')}
                        >
                            <CreditCard size={20} className={styles.tabIcon} />
                            카드 현황
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'calendar' ? styles.active : ''}`}
                            onClick={() => setActiveTab('calendar')}
                        >
                            <Calendar size={20} className={styles.tabIcon} />
                            캘린더
                        </button>
                    </div>
                )}

                <div className={`${styles.mainSections} ${isMobile ? styles.mobileLayout : ''}`}>
                    {/* Holdings Section */}
                    {(!isMobile || activeTab === 'holdings') && (
                        <div className={`${styles.holdingsSection} ${isMobile ? styles.mobileFull : ''}`}>
                            <Holdings />
                        </div>
                    )}

                    {/* Information Section */}
                    {(!isMobile || activeTab === 'calendar') && (
                        <div className={`${styles.informationSection} ${isMobile ? styles.mobileFull : ''}`}>
                            <Information />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
