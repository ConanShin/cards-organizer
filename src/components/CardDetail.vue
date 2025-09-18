<template>
    <div class="card-detail" v-if="card">
        <div class="detail-form">
            <!-- Basic Information -->
            <div class="form-section">
                <h4 class="section-title">기본 정보</h4>
                <div class="form-grid">
                    <div class="form-field">
                        <label class="field-label">카드 이름</label>
                        <input 
                            v-model="card.name" 
                            class="field-input"
                            placeholder="카드 이름을 입력하세요"
                        />
                    </div>
                    <div class="form-field">
                        <label class="field-label">사용자</label>
                        <select v-model="card.holder" class="field-select">
                            <option value="conan">Conan</option>
                            <option value="chaeji">Chaeji</option>
                        </select>
                    </div>
                    <div class="form-field">
                        <label class="field-label">결제 은행</label>
                        <input 
                            v-model="card.deposit_bank" 
                            class="field-input"
                            placeholder="결제 은행을 입력하세요"
                        />
                    </div>
                    <div class="form-field">
                        <label class="field-label">연회비</label>
                        <input 
                            v-model="card.annual_fee" 
                            class="field-input"
                            type="number"
                            placeholder="0"
                        />
                    </div>
                    <div class="form-field">
                        <label class="field-label">월 사용금액</label>
                        <input 
                            v-model="card.monthly_usage" 
                            class="field-input"
                            type="number"
                            placeholder="0"
                        />
                    </div>
                    <div class="form-field">
                        <label class="field-label">카드 상태</label>
                        <select v-model="card.status" class="field-select">
                            <option value="using">사용중</option>
                            <option value="keeping">보관중</option>
                            <option value="terminated">해지됨</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Usage Period -->
            <div class="form-section">
                <h4 class="section-title">사용 기간</h4>
                <div class="form-grid">
                    <div class="form-field">
                        <label class="field-label">시작일</label>
                        <input 
                            type="date" 
                            v-model="card.period_start" 
                            class="field-input"
                        />
                    </div>
                    <div class="form-field">
                        <label class="field-label">종료일</label>
                        <input 
                            type="date" 
                            v-model="card.period_end" 
                            class="field-input"
                        />
                    </div>
                </div>
            </div>

            <!-- Auto Payments -->
            <div class="form-section">
                <div class="section-header">
                    <h4 class="section-title">자동 결제</h4>
                    <button 
                        type="button" 
                        class="add-button"
                        @click="addMonthlyPayment"
                    >
                        <i class="add-icon">+</i>
                        추가
                    </button>
                </div>
                <div class="auto-payments-list" v-if="card.debits && card.debits.length > 0">
                    <div 
                        v-for="(payment, index) in card.debits" 
                        :key="index"
                        class="payment-item"
                    >
                        <div class="payment-fields">
                            <div class="form-field">
                                <label class="field-label">내용</label>
                                <input 
                                    v-model="payment.name" 
                                    class="field-input"
                                    placeholder="결제 내용"
                                />
                            </div>
                            <div class="form-field">
                                <label class="field-label">금액</label>
                                <input 
                                    v-model="payment.cost" 
                                    class="field-input"
                                    type="number"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                        <button 
                            type="button" 
                            class="remove-button"
                            @click="deleteMonthlyPayment(payment)"
                        >
                            <i class="remove-icon">×</i>
                        </button>
                    </div>
                </div>
                <div v-else class="empty-state">
                    <p>등록된 자동 결제가 없습니다.</p>
                </div>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
            <button 
                type="button" 
                class="save-button"
                @click="saveCard"
                :disabled="!isFormValid"
            >
                <i class="save-icon">💾</i>
                저장
            </button>
            <button 
                type="button" 
                class="delete-button"
                @click="deleteCard"
                :disabled="!card.id"
            >
                <i class="delete-icon">🗑️</i>
                삭제
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CARD_STATUS } from '@/assets/constant'

interface Card {
    id?: string
    name: string
    holder: 'conan' | 'chaeji'
    deposit_bank: string
    annual_fee: string
    monthly_usage: string
    period_start: string
    period_end: string
    status: string
    debits?: Array<{
        name: string
        cost: string
    }>
}

interface MonthlyPayment {
    name: string
    cost: string
}

@Component
export default class CardDetail extends Vue {
    get card(): Card | null {
        return this.$store.getters.selectedCard || null
    }

    get isFormValid(): boolean {
        if (!this.card) return false
        
        return !!(
            this.card.name?.trim() &&
            this.card.holder &&
            this.card.period_start &&
            this.card.period_end
        )
    }

    getStatusText(status: string): string {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        }
        
        return statusMap[status] || status
    }

    addMonthlyPayment(): void {
        if (!this.card) return
        
        this.$store.commit('addMonthlyPayment')
        this.$forceUpdate()
    }

    deleteMonthlyPayment(monthlyPayment: MonthlyPayment): void {
        if (!this.card) return
        
        this.$store.commit('deleteMonthlyPayment', monthlyPayment)
    }

    async saveCard(): Promise<void> {
        if (!this.card || !this.isFormValid) return
        
        const cardName = this.card.name || '새 카드'
        const confirmed = confirm(`${cardName}을(를) 저장하시겠습니까?`)
        
        if (confirmed) {
            try {
                await this.$store.dispatch('save')
                alert(`${cardName}이(가) 성공적으로 저장되었습니다.`)
                this.$emit('card-saved', this.card)
            } catch (error) {
                console.error('Failed to save card:', error)
                alert('카드 저장에 실패했습니다.')
            }
        }
    }

    async deleteCard(): Promise<void> {
        if (!this.card || !this.card.id) return
        
        const cardName = this.card.name || '카드'
        const confirmed = confirm(`${cardName}을(를) 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.`)
        
        if (confirmed) {
            try {
                await this.$store.dispatch('delete', this.card.id)
                alert(`${cardName}이(가) 성공적으로 삭제되었습니다.`)
                this.$emit('card-deleted', this.card)
            } catch (error) {
                console.error('Failed to delete card:', error)
                alert('카드 삭제에 실패했습니다.')
            }
        }
    }

    formatCurrency(value: string): string {
        const num = parseFloat(value)
        if (isNaN(num)) return '0'
        return num.toLocaleString('ko-KR')
    }
}
</script>

<style scoped lang="scss">
.card-detail {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #2d2d2d;
    border-radius: 12px;
    overflow: hidden;
}


.detail-form {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}

.form-section {
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }

    .section-title {
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: #e0e0e0;
        padding-bottom: 0.3rem;
        border-bottom: 2px solid #404040;
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;

        .section-title {
            margin: 0;
            border: none;
            padding: 0;
        }
    }
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .field-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: #b0b0b0;
        margin: 0;
    }

    .field-input,
    .field-select {
        padding: 0.5rem;
        border: 2px solid #555;
        border-radius: 6px;
        font-size: 0.8rem;
        transition: all 0.3s ease;
        background: #3a3a3a;
        color: #e0e0e0;

        &:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        &::placeholder {
            color: #888;
        }
    }

    .field-select {
        cursor: pointer;
    }
}

.add-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #218838;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
    }

    .add-icon {
        font-size: 1rem;
        font-weight: bold;
    }
}

.auto-payments-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.payment-item {
    display: flex;
    align-items: flex-end;
    gap: 0.75rem;
    padding: 0.75rem;
    background: #3a3a3a;
    border-radius: 6px;
    border: 1px solid #555;

    .payment-fields {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
    }

    .remove-button {
        width: 32px;
        height: 32px;
        background: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: #c82333;
            transform: scale(1.05);
        }

        .remove-icon {
            font-size: 1rem;
            font-weight: bold;
        }
    }
}

.empty-state {
    text-align: center;
    padding: 1.5rem;
    color: #888;
    font-style: italic;
    font-size: 0.9rem;
}

.action-buttons {
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    background: #3a3a3a;
    border-top: 1px solid #555;
}

.save-button,
.delete-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
    }
}

.save-button {
    background: #007bff;
    color: white;

    &:hover:not(:disabled) {
        background: #0056b3;
        transform: translateY(-1px);
    }
}

.delete-button {
    background: #dc3545;
    color: white;

    &:hover:not(:disabled) {
        background: #c82333;
        transform: translateY(-1px);
    }
}

.save-icon,
.delete-icon {
    font-size: 1.1rem;
}

// Responsive design
@media (max-width: 768px) {
    .detail-header {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
        text-align: center;

        .card-title {
            font-size: 1.3rem;
        }
    }

    .detail-form {
        padding: 1rem;
    }

    .form-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }

    .payment-item {
        flex-direction: column;
        align-items: stretch;

        .payment-fields {
            grid-template-columns: 1fr;
        }

        .remove-button {
            align-self: flex-end;
            width: auto;
            padding: 0.5rem 1rem;
        }
    }

    .action-buttons {
        flex-direction: column;
        gap: 0.75rem;
    }
}

@media (max-width: 480px) {
    .detail-header {
        .card-title {
            font-size: 1.2rem;
        }

        .card-status-badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
        }
    }

    .form-field {
        .field-input,
        .field-select {
            padding: 0.6rem;
            font-size: 0.85rem;
        }
    }
}
</style>