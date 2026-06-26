'use client';

import React, { useEffect, useState } from 'react';
import useCardsStore, { CardsState } from '@/store';
import { mockRecommendations } from '@/data/mockRecommendations';
import { canReceiveBenefit } from '@/utils/benefitAnalyzer';
import { ArrowRight, Gift, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export default function Recommendations() {
    const cards = useCardsStore((state: CardsState) => state.cards);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full h-full flex flex-col px-4 pt-4 pb-24 sm:px-0 sm:py-6 overflow-y-auto custom-scrollbar relative z-10">
            {/* Header Area */}
            <div className="mb-6 sm:mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded bg-indigo-500/10 text-xs font-semibold text-indigo-400">
                    <Sparkles size={14} />
                    <span>Personalized Offers</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3 text-white">
                    최대 혜택을 위한 맞춤형 추천
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl">
                    보유 카드 이력을 분석하여 지금 당장 신규 발급 혜택을 받을 수 있는 카드를 선별했습니다.
                </p>
            </div>

            {/* Recommendations Grid - Clean Modern UI */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockRecommendations.map((rec) => {
                    const isEligible = canReceiveBenefit(cards, rec.company);
                    
                    return (
                        <div 
                            key={rec.id}
                            className="flex flex-col bg-[#1c1c1e] rounded-2xl border border-white/10 overflow-hidden"
                        >
                            {/* Header / Graphic */}
                            <div className="h-32 w-full bg-gradient-to-r from-[#2c2c2e] to-[#1c1c1e] p-5 flex items-start justify-between relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                
                                <div className="relative z-10 w-24 h-16 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-md transform -rotate-2">
                                    <span className="font-bold text-white/80 text-sm">{rec.company}</span>
                                </div>
                                
                                <div className="relative z-10">
                                    {isEligible ? (
                                        <div className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-green-500/20 text-green-400">
                                            <CheckCircle2 size={12} /> 발급 가능
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400">
                                            <XCircle size={12} /> 6개월 내 이력
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <div className="text-xs text-gray-500 mb-1">{rec.company}</div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{rec.name}</h3>
                                    <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 px-2.5 py-1 rounded text-indigo-400 text-sm font-medium">
                                        <Gift size={14} />
                                        {rec.promotionContent}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {rec.benefits.map((b, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-sm font-medium text-gray-300">{b.title}</span>
                                            <span className="text-sm text-gray-500">{b.description}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <button 
                                        className={`
                                            w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                                            ${isEligible 
                                                ? 'bg-white text-black hover:bg-gray-200' 
                                                : 'bg-white/5 text-gray-500 cursor-not-allowed'
                                            }
                                        `}
                                        disabled={!isEligible}
                                    >
                                        {isEligible ? `${rec.rewardCost} 혜택 받기` : '혜택 대상 아님'}
                                        {isEligible && <ArrowRight size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
