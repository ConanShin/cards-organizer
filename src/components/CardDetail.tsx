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

    const [formData, setFormData] = useState<Card | null>(null);

    useEffect(() => {
        if (selectedCard) {
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
        setFormData(prev => prev ? ({ ...prev, period: { ...prev.period, [name]: value } }) : null);
    };

    const formatDateForInput = (date: Date | string) => {
        if (!date) return '';
        const d = new Date(date);
        if (isNaN(d.getTime())) return '';
        return d.toISOString().split('T')[0];
    };

    const addMonthlyPayment = () => {
        setFormData(prev => prev ? { ...prev, automaticDebit: [...(prev.automaticDebit || []), { name: '', cost: '' }] } : null);
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
        showDialog({
            title: '카드 저장',
            message: `${formData.name || '새 카드'}을(를) 저장하시겠습니까?`,
            type: 'confirm',
            onConfirm: async () => {
                await saveCardAction({
                    ...formData,
                    period: { start: new Date(formData.period.start), end: new Date(formData.period.end) }
                });
            }
        });
    };

    const deleteCard = async () => {
        if (!formData.id) return;
        showDialog({
            title: '카드 삭제',
            message: `${formData.name}을(를) 삭제하시겠습니까?`,
            type: 'confirm',
            onConfirm: async () => {
                await removeCardAction(formData.id!);
            }
        });
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-5 space-y-8 custom-scrollbar">
                
                {/* Basic Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-white">
                        <CreditCard size={16} />
                        <h4 className="text-sm font-semibold">기본 정보</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5 col-span-2">
                            <label className="text-xs text-gray-400">카드 이름</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-400">사용자</label>
                            <select
                                name="holder"
                                value={formData.holder}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                            >
                                <option value="conan">Conan</option>
                                <option value="chaeji">Chaeji</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-400">카드 상태</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                            >
                                <option value={CARD_STATUS.USING}>사용중</option>
                                <option value={CARD_STATUS.KEEPING}>보관중</option>
                                <option value={CARD_STATUS.TERMINATED}>해지됨</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-400">결제 은행</label>
                            <input
                                name="depositBank"
                                value={formData.depositBank}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-400">연회비</label>
                            <input
                                name="annualFee"
                                value={formData.annualFee}
                                onChange={handleInputChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Period */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-white">
                        <Calendar size={16} />
                        <h4 className="text-sm font-semibold">사용 기간</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-400">시작일</label>
                            <input
                                type="date"
                                name="start"
                                value={formatDateForInput(formData.period.start)}
                                onChange={handlePeriodChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none [color-scheme:dark]"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs text-gray-400">종료일</label>
                            <input
                                type="date"
                                name="end"
                                value={formatDateForInput(formData.period.end)}
                                onChange={handlePeriodChange}
                                className="w-full bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none [color-scheme:dark]"
                            />
                        </div>
                    </div>
                </div>

                {/* Automation */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-white">
                        <div className="flex items-center gap-2">
                            <RefreshCcw size={16} />
                            <h4 className="text-sm font-semibold">자동 결제</h4>
                        </div>
                        <button onClick={addMonthlyPayment} className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300">
                            <Plus size={14} /> 추가
                        </button>
                    </div>

                    <div className="space-y-3">
                        {formData.automaticDebit?.map((payment, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <input
                                    value={payment.name}
                                    onChange={(e) => handlePaymentChange(index, 'name', e.target.value)}
                                    className="flex-1 bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                                    placeholder="내용"
                                />
                                <input
                                    value={payment.cost}
                                    onChange={(e) => handlePaymentChange(index, 'cost', e.target.value)}
                                    className="flex-1 bg-[#2c2c2e] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                                    placeholder="금액"
                                />
                                <button onClick={() => deleteMonthlyPayment(index)} className="text-gray-500 hover:text-red-400">
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-5 border-t border-white/10 bg-[#1c1c1e] flex justify-between gap-4">
                <button
                    onClick={deleteCard}
                    disabled={!formData.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-white/5 disabled:opacity-50"
                >
                    <Trash2 size={16} /> 삭제
                </button>
                <button
                    onClick={saveCard}
                    disabled={!isFormValid}
                    className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium bg-white text-black hover:bg-gray-200 disabled:opacity-50"
                >
                    <Save size={16} /> 저장
                </button>
            </div>
        </div>
    );
};

export default CardDetail;
