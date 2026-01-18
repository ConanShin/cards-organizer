'use client';

import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';

import Holdings from '@/components/Holdings';
import Information from '@/components/Information';
import CardDetail from '@/components/CardDetail';
import { CreditCard, Calendar, X, Plus } from 'lucide-react';
import { CARD_STATUS } from '@/data/constant';
import { Card } from '@/types/card';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<'holdings' | 'calendar'>('calendar');

    const loadCards = useCardsStore((state: CardsState) => state.loadCards);
    const selectedCard = useCardsStore((state: CardsState) => state.selectedCard);
    const resetSelection = useCardsStore((state: CardsState) => state.resetSelection);

    useEffect(() => {
        if (selectedCard) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCard]);

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

    // Let's just fix the return statement first.
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-indigo-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="relative z-10 px-6 py-4 sm:py-5 border-b border-white/5 flex items-center justify-between backdrop-blur-md bg-black/20 sticky top-0">
                <div className="flex flex-col">
                    <h1 className="text-xl sm:text-3xl font-bold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                        Cards Organizer
                    </h1>
                    {!isMobile && (
                        <p className="text-sm text-gray-400 mt-1 font-light tracking-wide">
                            신용카드 혜택 관리의 새로운 기준
                        </p>
                    )}
                </div>
                {isMobile ? (
                    <div className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        v2.0
                    </div>
                ) : (
                    <div className="text-xs text-gray-500 font-mono">
                        v2.0 Premium
                    </div>
                )}
            </header>

            <main className="relative z-10 flex-1 overflow-hidden pb-[70px] sm:pb-0">
                <div className="h-full max-w-[1920px] mx-auto p-0 lg:p-6 lg:gap-6 lg:grid lg:grid-cols-12 flex flex-col">
                    {/* Holdings Section (Sidebar) */}
                    <div className={`
                        lg:col-span-3 lg:h-full lg:block
                        ${isMobile && activeTab === 'calendar' ? 'hidden' : 'block h-full'}
                        transition-all duration-300
                    `}>
                        <div className="h-full bg-neutral-900/50 lg:bg-[#121212] lg:border border-white/5 lg:rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl ring-1 ring-white/5">
                            <Holdings />
                        </div>
                    </div>

                    {/* Information Section (Main Content) */}
                    <div className={`
                        lg:col-span-9 lg:h-full lg:block
                        ${isMobile && activeTab === 'holdings' ? 'hidden' : 'block h-full'}
                        transition-all duration-300
                    `}>
                        <div className="h-full bg-neutral-900/50 lg:bg-[#121212] lg:border border-white/5 lg:rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl ring-1 ring-white/5 relative">
                            <Information />
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            {isMobile && (
                <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#121214]/90 backdrop-blur-xl border-t border-white/10 safe-area-bottom">
                    <div className="flex items-center justify-around h-16">
                        <button
                            className={`flex flex-col items-center justify-center w-full gap-1 transition-colors duration-300 ${activeTab === 'holdings' ? 'text-indigo-400' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('holdings')}
                        >
                            <CreditCard size={20} className={activeTab === 'holdings' ? 'scale-110' : ''} />
                            <span className="text-[10px] font-medium">My Cards</span>
                        </button>
                        <button
                            className={`flex flex-col items-center justify-center w-full gap-1 transition-colors duration-300 ${activeTab === 'calendar' ? 'text-indigo-400' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('calendar')}
                        >
                            <Calendar size={20} className={activeTab === 'calendar' ? 'scale-110' : ''} />
                            <span className="text-[10px] font-medium">Timeline</span>
                        </button>
                    </div>
                </nav>
            )}

            {/* Mobile Floating Action Button (FAB) */}
            {isMobile && activeTab === 'holdings' && (
                <button
                    onClick={() => {
                        const tempCard: Card = {
                            id: Date.now().toString(),
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
                        useCardsStore.getState().addLocalCard(tempCard);
                    }}
                    className="fixed right-6 bottom-[88px] z-40 w-14 h-14 rounded-full bg-indigo-600 shadow-[0_8px_20px_rgba(79,70,229,0.4)] flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <Plus size={28} />
                </button>
            )}

            {/* Global Card Detail Modal */}
            {selectedCard && (
                <div
                    className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={resetSelection}
                >
                    <div
                        className="w-full max-w-2xl bg-[#18181b] border-t sm:border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col h-[92vh] sm:h-auto sm:max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 duration-300 ring-1 ring-white/10"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5 shrink-0">
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-bold text-white truncate max-w-[200px] sm:max-w-md">
                                    {selectedCard.name || '새 카드'}
                                </h3>
                                <div className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium shrink-0 ${getStatusColorClass(selectedCard.status)}`}>
                                    {getStatusText(selectedCard.status)}
                                </div>
                            </div>
                            <button
                                className="p-2 -mr-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                onClick={resetSelection}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-0 sm:p-2 bg-[#121214]">
                            <CardDetail />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Helpers
const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
        [CARD_STATUS.USING]: '사용중',
        [CARD_STATUS.KEEPING]: '보관중',
        [CARD_STATUS.TERMINATED]: '해지됨'
    };
    return statusMap[status] || status;
};

const getStatusColorClass = (status: string) => {
    switch (status) {
        case CARD_STATUS.USING: return 'bg-green-500/20 text-green-300 ring-1 ring-green-500/30';
        case CARD_STATUS.KEEPING: return 'bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/30';
        case CARD_STATUS.TERMINATED: return 'bg-red-500/20 text-red-300 ring-1 ring-red-500/30';
        default: return 'bg-gray-500/20 text-gray-300';
    }
};
