'use client';

import React, { useState, useEffect } from 'react';
import useCardsStore, { CardsState } from '@/store';

import Holdings from '@/components/Holdings';
import Information from '@/components/Information';
import CardDetail from '@/components/CardDetail';
import CustomDialog from '@/components/CustomDialog';
import Recommendations from '@/components/Recommendations';
import { CreditCard, Calendar, X, Plus, Sparkles } from 'lucide-react';
import { CARD_STATUS } from '@/data/constant';
import { Card } from '@/types/card';

type TabType = 'recommendations' | 'holdings' | 'calendar';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>('recommendations');

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

    return (
        <div className="min-h-[100dvh] bg-[#000000] text-[#ededed] flex flex-col font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Desktop Navigation - Minimalist & Clean */}
            {!isMobile && (
                <header className="sticky top-0 z-50 bg-[#000000]/80 backdrop-blur-xl border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <h1 className="text-lg font-semibold tracking-tight text-white">
                                Cards Organizer
                            </h1>
                            <span className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/60 text-[10px] font-medium tracking-wide">
                                V3
                            </span>
                        </div>
                        
                        <nav className="flex items-center gap-1">
                            <NavButton 
                                active={activeTab === 'recommendations'} 
                                onClick={() => setActiveTab('recommendations')}
                                icon={<Sparkles size={16} />} 
                                label="추천 혜택" 
                            />
                            <NavButton 
                                active={activeTab === 'holdings'} 
                                onClick={() => setActiveTab('holdings')}
                                icon={<CreditCard size={16} />} 
                                label="내 카드" 
                            />
                            <NavButton 
                                active={activeTab === 'calendar'} 
                                onClick={() => setActiveTab('calendar')}
                                icon={<Calendar size={16} />} 
                                label="타임라인" 
                            />
                        </nav>
                    </div>
                </header>
            )}

            {/* Main Content Area */}
            <main className={`relative z-10 flex-1 w-full max-w-7xl mx-auto flex flex-col transition-opacity duration-300 ${!isMobile ? 'py-8 px-6' : 'pt-0 pb-[80px]'}`}>
                {activeTab === 'recommendations' && (
                    <div className="h-full animate-in fade-in duration-500">
                        <Recommendations />
                    </div>
                )}
                {activeTab === 'holdings' && (
                    <div className="h-full animate-in fade-in duration-500 flex flex-col lg:flex-row gap-4 sm:gap-6 px-4 pt-4 sm:px-0 sm:pt-0">
                        <div className="flex-1 w-full bg-[#111111] rounded-2xl border border-white/10 shadow-sm overflow-hidden lg:max-w-md h-[calc(100dvh-180px)] lg:h-[calc(100vh-8rem)]">
                            <Holdings />
                        </div>
                        <div className="flex-[2] w-full bg-[#111111] rounded-2xl border border-white/10 shadow-sm overflow-hidden hidden lg:block h-[calc(100vh-8rem)]">
                            <Information />
                        </div>
                    </div>
                )}
                {activeTab === 'calendar' && (
                    <div className="h-full animate-in fade-in duration-500 px-4 pt-4 sm:px-0 sm:pt-0">
                        <div className="w-full bg-[#111111] rounded-2xl border border-white/10 shadow-sm overflow-hidden h-[calc(100dvh-180px)] lg:h-[calc(100vh-8rem)]">
                            <Information />
                        </div>
                    </div>
                )}
            </main>

            {/* Mobile Header */}
            {isMobile && (
                <header className="sticky top-0 z-40 px-5 py-4 border-b border-white/10 bg-[#000000]/80 backdrop-blur-xl flex items-center justify-between">
                    <h1 className="text-lg font-semibold tracking-tight text-white">
                        Cards Organizer
                    </h1>
                </header>
            )}

            {/* Mobile Bottom Navigation */}
            {isMobile && (
                <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-xl border-t border-white/10 safe-area-bottom pb-4 pt-2 px-6">
                    <div className="flex items-center justify-around h-12">
                        <MobileNavButton 
                            active={activeTab === 'recommendations'} 
                            onClick={() => setActiveTab('recommendations')}
                            icon={<Sparkles size={20} />} 
                            label="추천" 
                        />
                        <MobileNavButton 
                            active={activeTab === 'holdings'} 
                            onClick={() => setActiveTab('holdings')}
                            icon={<CreditCard size={20} />} 
                            label="내 카드" 
                        />
                        <MobileNavButton 
                            active={activeTab === 'calendar'} 
                            onClick={() => setActiveTab('calendar')}
                            icon={<Calendar size={20} />} 
                            label="타임라인" 
                        />
                    </div>
                </nav>
            )}

            {/* Mobile Floating Action Button (FAB) for Holdings Tab */}
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
                            period: { start: new Date(), end: new Date() },
                            status: CARD_STATUS.USING,
                            holder: 'conan',
                            selected: true,
                            isNew: true
                        };
                        useCardsStore.getState().addLocalCard(tempCard);
                    }}
                    className="fixed right-5 bottom-[90px] z-40 w-12 h-12 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <Plus size={24} />
                </button>
            )}

            {/* Global Card Detail Modal - Clean iOS Style Modal */}
            {selectedCard && (
                <div
                    className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={resetSelection}
                >
                    <div 
                        className="w-full sm:max-w-xl bg-[#1c1c1e] sm:rounded-2xl flex flex-col h-[90vh] sm:h-auto sm:max-h-[85vh] shadow-2xl overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 duration-200 rounded-t-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#1c1c1e] shrink-0 sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <h3 className="text-base font-semibold text-white truncate max-w-[200px] sm:max-w-[300px]">
                                    {selectedCard.name || '새 카드 추가'}
                                </h3>
                                {!selectedCard.isNew && (
                                    <div className={`px-2 py-0.5 rounded text-[10px] font-medium shrink-0 ${getStatusColorClass(selectedCard.status)}`}>
                                        {getStatusText(selectedCard.status)}
                                    </div>
                                )}
                            </div>
                            <button
                                className="p-1.5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                                onClick={resetSelection}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#1c1c1e]">
                            <CardDetail />
                        </div>
                    </div>
                </div>
            )}
            <CustomDialog />
        </div>
    );
}

// Helpers
function NavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
    return (
        <button
            onClick={onClick}
            className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}
            `}
        >
            {icon}
            {label}
        </button>
    );
}

function MobileNavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
    return (
        <button
            onClick={onClick}
            className={`
                flex flex-col items-center justify-center gap-1 w-16
                transition-colors ${active ? 'text-white' : 'text-gray-500'}
            `}
        >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}

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
        case CARD_STATUS.USING: return 'bg-green-500/20 text-green-400';
        case CARD_STATUS.KEEPING: return 'bg-amber-500/20 text-amber-400';
        case CARD_STATUS.TERMINATED: return 'bg-gray-500/20 text-gray-400';
        default: return 'bg-gray-500/20 text-gray-400';
    }
};
