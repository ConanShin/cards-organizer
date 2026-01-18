import React, { useState, useEffect } from 'react';
import useCardsStore from '@/store';
import { Card, Debit } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import { Save, Trash2, Plus, X, CreditCard, Calendar, RefreshCcw } from 'lucide-react';

const CardDetail: React.FC = () => {
    const selectedCard = useCardsStore(state => state.selectedCard);
    const saveCardAction = useCardsStore(state => state.saveCard);
    const removeCardAction = useCardsStore(state => state.removeCard);
    const showDialog = useCardsStore(state => state.showDialog);

    // Local state for editing form
    const [formData, setFormData] = useState<Card | null>(null);

    useEffect(() => {
        if (selectedCard) {
            // Deep copy to avoid direct mutation of store state until save
            setFormData(JSON.parse(JSON.stringify(selectedCard)));
        } else {
            setFormData(null);
        }
    }, [selectedCard]);

    if (!formData) return null;

    const isFormValid = !!(
        formData.name?.trim() &&
        formData.holder &&
        formData.period?.start &&
        formData.period?.end
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? ({ ...prev, [name]: value }) : null);
    };

    const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? ({
            ...prev,
            period: {
                ...prev.period,
                [name]: value // string format "YYYY-MM-DD" is fine for input type=date
            }
        }) : null);
    };

    // Need to handle Date object vs string for input type="date"
    const formatDateForInput = (date: Date | string) => {
        if (!date) return '';
        const d = new Date(date);
        if (isNaN(d.getTime())) return ''; // Invalid date check
        return d.toISOString().split('T')[0];
    };

    const addMonthlyPayment = () => {
        setFormData(prev => {
            if (!prev) return null;
            return {
                ...prev,
                automaticDebit: [...(prev.automaticDebit || []), { name: '', cost: '' }]
            };
        });
    };

    const deleteMonthlyPayment = (index: number) => {
        setFormData(prev => {
            if (!prev) return null;
            const newDebits = [...(prev.automaticDebit || [])];
            newDebits.splice(index, 1);
            return { ...prev, automaticDebit: newDebits };
        });
    };

    const handlePaymentChange = (index: number, field: keyof Debit, value: string) => {
        setFormData(prev => {
            if (!prev) return null;
            const newDebits = [...(prev.automaticDebit || [])];
            newDebits[index] = { ...newDebits[index], [field]: value };
            return { ...prev, automaticDebit: newDebits };
        });
    };


    const saveCard = async () => {
        if (!formData || !isFormValid) return;

        const cardName = formData.name || '새 카드';
        showDialog({
            title: '카드 저장',
            message: `${cardName}을(를) 저장하시겠습니까?`,
            type: 'confirm',
            onConfirm: async () => {
                const savingData = {
                    ...formData,
                    period: {
                        start: new Date(formData.period.start),
                        end: new Date(formData.period.end)
                    }
                };
                await saveCardAction(savingData);
            }
        });
    };

    const deleteCard = async () => {
        if (!formData.id) return;
        const cardName = formData.name || '카드';
        showDialog({
            title: '카드 삭제',
            message: `${cardName}을(를) 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`,
            type: 'confirm',
            onConfirm: async () => {
                await removeCardAction(formData.id!);
            }
        });
    };

    return (
        <div className="flex flex-col h-full bg-[#18181b]">
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-8 custom-scrollbar">
                {/* Basic Info Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                        <CreditCard size={16} className="text-indigo-400" />
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">기본 정보</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5 col-span-2">
                            <label className="text-xs font-semibold text-gray-500 ml-1">카드 이름</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                                placeholder="카드 이름을 입력하세요"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-500 ml-1">사용자</label>
                            <div className="relative">
                                <select
                                    name="holder"
                                    value={formData.holder}
                                    onChange={handleInputChange}
                                    className="w-full appearance-none bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all cursor-pointer"
                                >
                                    <option value="conan">Conan</option>
                                    <option value="chaeji">Chaeji</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-500 ml-1">카드 상태</label>
                            <div className="relative">
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full appearance-none bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all cursor-pointer"
                                >
                                    <option value={CARD_STATUS.USING}>사용중</option>
                                    <option value={CARD_STATUS.KEEPING}>보관중</option>
                                    <option value={CARD_STATUS.TERMINATED}>해지됨</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-500 ml-1">결제 은행</label>
                            <input
                                name="depositBank"
                                value={formData.depositBank}
                                onChange={handleInputChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                                placeholder="예: 신한은행"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-500 ml-1">연회비</label>
                            <input
                                name="annualFee"
                                value={formData.annualFee}
                                onChange={handleInputChange}
                                inputMode="numeric"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                                placeholder="0"
                            />
                        </div>

                        <div className="space-y-1.5 col-span-2 md:col-span-1">
                            <label className="text-xs font-semibold text-gray-500 ml-1">월 사용금액</label>
                            <input
                                name="monthlyUsage"
                                value={formData.monthlyUsage}
                                onChange={handleInputChange}
                                inputMode="numeric"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                                placeholder="0"
                            />
                        </div>
                    </div>
                </div>

                {/* Period Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                        <Calendar size={16} className="text-indigo-400" />
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">사용 기간</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-500 ml-1">시작일</label>
                            <input
                                type="date"
                                name="start"
                                value={formatDateForInput(formData.period.start)}
                                onChange={handlePeriodChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all [color-scheme:dark]"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-500 ml-1">종료일</label>
                            <input
                                type="date"
                                name="end"
                                value={formatDateForInput(formData.period.end)}
                                onChange={handlePeriodChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all [color-scheme:dark]"
                            />
                        </div>
                    </div>
                </div>

                {/* Automation Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <RefreshCcw size={16} className="text-indigo-400" />
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">자동 결제</h4>
                        </div>
                        <button
                            type="button"
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 text-xs font-medium transition-colors"
                            onClick={addMonthlyPayment}
                        >
                            <Plus size={12} />
                            추가
                        </button>
                    </div>

                    {formData.automaticDebit && formData.automaticDebit.length > 0 ? (
                        <div className="space-y-3">
                            {formData.automaticDebit.map((payment, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group hover:border-white/10 transition-colors">
                                    <div className="flex-1 grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-semibold text-gray-500 ml-1">내용</label>
                                            <input
                                                value={payment.name}
                                                onChange={(e) => handlePaymentChange(index, 'name', e.target.value)}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent"
                                                placeholder="결제 내용"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-semibold text-gray-500 ml-1">금액</label>
                                            <input
                                                value={payment.cost}
                                                onChange={(e) => handlePaymentChange(index, 'cost', e.target.value)}
                                                inputMode="numeric"
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent"
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-6 p-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                        onClick={() => deleteMonthlyPayment(index)}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-8 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-500 text-sm">
                            <p>등록된 자동 결제가 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer / Actions */}
            <div className="p-6 border-t border-white/5 bg-black/20 backdrop-blur-sm flex items-center justify-between gap-4">
                <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={deleteCard}
                    disabled={!formData.id}
                >
                    <Trash2 size={18} />
                    <span className="hidden sm:inline">삭제</span>
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                        type="button"
                        className={`
                            flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl 
                            text-sm font-bold text-white shadow-lg shadow-indigo-500/20
                            transition-all duration-200
                            ${isFormValid
                                ? 'bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02] cursor-pointer'
                                : 'bg-gray-700 cursor-not-allowed opacity-50'}
                        `}
                        onClick={saveCard}
                        disabled={!isFormValid}
                    >
                        <Save size={18} />
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
