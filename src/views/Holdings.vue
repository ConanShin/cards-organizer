<template>
    <div class="holdings">
        <header class="holdings-header">
            <h2 class="holdings-title">카드 보유 현황</h2>
            <div class="filter-controls">
                <label class="checkbox-label">
                    <input 
                        type="checkbox" 
                        v-model="showTerminated"
                        class="checkbox-input"
                    />
                    <span class="checkbox-text">해지된 카드 표시</span>
                </label>
            </div>
        </header>
        
        <div class="cards-container">
            <div class="user-cards">
                <h3 class="user-title conan-title">Conan</h3>
                <div class="cards-grid">
                    <div 
                        v-for="(card, index) in conanCards" 
                        :key="`conan-${index}`"
                        :class="getCardClasses(card)"
                        @click="selectCard(card)"
                        class="card-item"
                    >
                        <div class="card-name">{{ card.name || '새 카드' }}</div>
                        <div class="card-status">{{ getStatusText(card.status) }}</div>
                    </div>
                </div>
            </div>
            
            <div class="user-cards">
                <h3 class="user-title chaeji-title">Chaeji</h3>
                <div class="cards-grid">
                    <div 
                        v-for="(card, index) in chaejiCards" 
                        :key="`chaeji-${index}`"
                        :class="getCardClasses(card)"
                        @click="selectCard(card)"
                        class="card-item"
                    >
                        <div class="card-name">{{ card.name || '새 카드' }}</div>
                        <div class="card-status">{{ getStatusText(card.status) }}</div>
                    </div>
                    <div class="card-item new-card" @click="addNewCard">
                        <div class="add-icon">+</div>
                        <div class="add-text">새 카드 추가</div>
                    </div>
                </div>
            </div>
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
    status: string
    selected?: boolean
}

@Component
export default class Holdings extends Vue {
    showTerminated: boolean = false

    get cards(): Card[] {
        return this.$store.getters.cards || []
    }

    get conanCards(): Card[] {
        return this.filterCardsByUser('conan')
    }

    get chaejiCards(): Card[] {
        return this.filterCardsByUser('chaeji')
    }

    private filterCardsByUser(holder: 'conan' | 'chaeji'): Card[] {
        const userCards = this.cards.filter(card => card.holder === holder)
        
        if (this.showTerminated) {
            return userCards
        }
        
        return userCards.filter(card => card.status !== CARD_STATUS.TERMINATED)
    }

    getCardClasses(card: Card): string[] {
        const classes = ['card-item', card.holder, card.status]
        
        if (card.selected) {
            classes.push('selected')
        }
        
        return classes
    }

    getStatusText(status: string): string {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        }
        
        return statusMap[status] || status
    }

    selectCard(card: Card): void {
        this.$store.commit('selectCard', card)
    }

    addNewCard(): void {
        this.$store.commit('newCard')
    }
}
</script>

<style scoped lang="scss">
.holdings {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.holdings-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e9ecef;

    .holdings-title {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
    }

    .filter-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            font-size: 0.9rem;
            color: #6c757d;

            .checkbox-input {
                width: 16px;
                height: 16px;
                cursor: pointer;
            }

            .checkbox-text {
                user-select: none;
            }
        }
    }
}

.cards-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.user-cards {
    .user-title {
        margin: 0 0 1rem 0;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        text-align: center;

        &.conan-title {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }

        &.chaeji-title {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
        }
    }
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
}

.card-item {
    background: white;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 120px;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    &.selected {
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    // Status-based styling
    &.using {
        border-color: #28a745;
        background: linear-gradient(135deg, #d4edda, #c3e6cb);

        &:hover {
            border-color: #1e7e34;
        }
    }

    &.keeping {
        border-color: #ffc107;
        background: linear-gradient(135deg, #fff3cd, #ffeaa7);

        &:hover {
            border-color: #e0a800;
        }
    }

    &.terminated {
        border-color: #dc3545;
        background: linear-gradient(135deg, #f8d7da, #f5c6cb);
        opacity: 0.7;

        &:hover {
            border-color: #c82333;
            opacity: 0.9;
        }
    }

    // User-specific styling
    &.conan {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #667eea;
        }
    }

    &.chaeji {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #e74c3c;
        }
    }

    .card-name {
        font-weight: 600;
        font-size: 0.9rem;
        color: #2c3e50;
        text-align: center;
        margin-bottom: 0.5rem;
        word-break: break-word;
    }

    .card-status {
        font-size: 0.8rem;
        color: #6c757d;
        text-align: center;
        padding: 0.25rem 0.5rem;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 12px;
        font-weight: 500;
    }
}

.new-card {
    border: 2px dashed #6c757d;
    background: #f8f9fa;
    color: #6c757d;

    &:hover {
        border-color: #007bff;
        background: #e3f2fd;
        color: #007bff;
    }

    .add-icon {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 0.5rem;
    }

    .add-text {
        font-size: 0.9rem;
        font-weight: 500;
    }
}

// Responsive design
@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 0.75rem;
    }

    .card-item {
        min-height: 100px;
        padding: 0.75rem;

        .card-name {
            font-size: 0.8rem;
        }

        .card-status {
            font-size: 0.7rem;
        }
    }
}
</style>