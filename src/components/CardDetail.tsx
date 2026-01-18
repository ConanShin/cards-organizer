import React, { useState, useEffect } from 'react';
import useCardsStore from '@/store';
import { Card, Debit } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';
import styles from './CardDetail.module.scss';
import { Save, Trash2, Plus, X } from 'lucide-react';

const CardDetail: React.FC = () => {
    const selectedCard = useCardsStore(state => state.selectedCard);
    const saveCardAction = useCardsStore(state => state.saveCard);
    const removeCardAction = useCardsStore(state => state.removeCard);

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
        if (window.confirm(`${cardName}을(를) 저장하시겠습니까?`)) {
            const savingData = {
                ...formData,
                period: {
                    start: new Date(formData.period.start),
                    end: new Date(formData.period.end)
                }
            };
            await saveCardAction(savingData);
            alert(`${cardName}이(가) 성공적으로 저장되었습니다.`);
        }
    };

    const deleteCard = async () => {
        const cardName = formData.name || '카드';
        if (window.confirm(`${cardName}을(를) 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.`)) {
            if (formData.id) {
                await removeCardAction(formData.id);
                // Alert might be redundant if store clears selection, but helpful
                // alert(`${cardName}이(가) 삭제되었습니다.`); 
            }
        }
    };

    return (
        <div className={styles.cardDetail}>
            <div className={styles.detailForm}>
                <div className={styles.formSection}>
                    <h4 className={styles.sectionTitle}>기본 정보</h4>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>카드 이름</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={styles.fieldInput}
                                placeholder="카드 이름을 입력하세요"
                            />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>사용자</label>
                            <select
                                name="holder"
                                value={formData.holder}
                                onChange={handleInputChange}
                                className={styles.fieldSelect}
                            >
                                <option value="conan">Conan</option>
                                <option value="chaeji">Chaeji</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>결제 은행</label>
                            <input
                                name="depositBank"
                                value={formData.depositBank}
                                onChange={handleInputChange}
                                className={styles.fieldInput}
                                placeholder="결제 은행을 입력하세요"
                            />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>연회비</label>
                            <input
                                name="annualFee"
                                value={formData.annualFee}
                                onChange={handleInputChange}
                                className={styles.fieldInput}
                                placeholder="0"
                            />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>월 사용금액</label>
                            <input
                                name="monthlyUsage"
                                value={formData.monthlyUsage}
                                onChange={handleInputChange}
                                className={styles.fieldInput}
                                placeholder="0"
                            />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>카드 상태</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className={styles.fieldSelect}
                            >
                                <option value={CARD_STATUS.USING}>사용중</option>
                                <option value={CARD_STATUS.KEEPING}>보관중</option>
                                <option value={CARD_STATUS.TERMINATED}>해지됨</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <h4 className={styles.sectionTitle}>사용 기간</h4>
                    <div className={styles.formGrid}>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>시작일</label>
                            <input
                                type="date"
                                name="start"
                                value={formatDateForInput(formData.period.start)}
                                onChange={handlePeriodChange}
                                className={styles.fieldInput}
                            />
                        </div>
                        <div className={styles.formField}>
                            <label className={styles.fieldLabel}>종료일</label>
                            <input
                                type="date"
                                name="end"
                                value={formatDateForInput(formData.period.end)}
                                onChange={handlePeriodChange}
                                className={styles.fieldInput}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.sectionHeader}>
                        <h4 className={styles.sectionTitle}>자동 결제</h4>
                        <button type="button" className={styles.addButton} onClick={addMonthlyPayment}>
                            <Plus size={14} className={styles.addIcon} />
                            추가
                        </button>
                    </div>
                    {formData.automaticDebit && formData.automaticDebit.length > 0 ? (
                        <div className={styles.autoPaymentsList}>
                            {formData.automaticDebit.map((payment, index) => (
                                <div key={index} className={styles.paymentItem}>
                                    <div className={styles.paymentFields}>
                                        <div className={styles.formField}>
                                            <label className={styles.fieldLabel}>내용</label>
                                            <input
                                                value={payment.name}
                                                onChange={(e) => handlePaymentChange(index, 'name', e.target.value)}
                                                className={styles.fieldInput}
                                                placeholder="결제 내용"
                                            />
                                        </div>
                                        <div className={styles.formField}>
                                            <label className={styles.fieldLabel}>금액</label>
                                            <input
                                                value={payment.cost}
                                                onChange={(e) => handlePaymentChange(index, 'cost', e.target.value)}
                                                className={styles.fieldInput}
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className={styles.removeButton}
                                        onClick={() => deleteMonthlyPayment(index)}
                                    >
                                        <X size={16} className={styles.removeIcon} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>등록된 자동 결제가 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.actionButtons}>
                <button
                    type="button"
                    className={styles.saveButton}
                    onClick={saveCard}
                    disabled={!isFormValid}
                >
                    <Save size={18} className={styles.saveIcon} />
                    저장
                </button>
                <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={deleteCard}
                    disabled={!formData.id}
                >
                    <Trash2 size={18} className={styles.deleteIcon} />
                    삭제
                </button>
            </div>
        </div>
    );
};

export default CardDetail;
