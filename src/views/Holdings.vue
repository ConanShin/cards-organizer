<template>
    <div class="holdings">
        <header class="holdings-header">
            <h2 class="holdings-title">카드 보유 현황</h2>
            <div class="header-controls">
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
                <div class="add-card-button" @click="addNewCard" v-if="!isMobile">
                    <div class="add-icon">+</div>
                    <div class="add-text">새 카드 추가</div>
                </div>
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
    isMobile: boolean = false

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
        // 이미 선택된 카드를 클릭하면 선택 해제
        if (card.selected) {
            this.$store.commit('reset')
        } else {
            this.$store.commit('selectCard', card)
        }
    }

    addNewCard(): void {
        // 임시 새 카드 생성 (아직 저장되지 않음)
        const tempCard = {
            name: '',
            deposit_bank: '',
            annual_fee: '',
            monthly_usage: '',
            debits: [],
            period_start: new Date().toISOString().substr(0, 10),
            period_end: new Date().toISOString().substr(0, 10),
            selected: true,
            status: CARD_STATUS.USING,
            holder: 'conan',
            isNew: true // 새 카드임을 표시하는 플래그
        }
        
        // 기존 선택 해제
        this.$store.commit('reset')
        
        // 임시 카드를 선택된 상태로 설정
        this.$store.commit('selectTempCard', tempCard)
    }

    checkMobile(): void {
        this.isMobile = window.innerWidth <= 768
    }

    mounted(): void {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    }

    beforeDestroy(): void {
        window.removeEventListener('resize', this.checkMobile)
    }
}
</script>

<style scoped lang="scss">
.holdings {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #2d2d2d;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 1.5rem;
}

.holdings-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #404040;

    .holdings-title {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #e0e0e0;
    }

    .header-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .filter-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .checkbox-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.7rem;
            color: #b0b0b0;
            padding: 0.5rem 1rem;
            border: 2px dashed #6c757d;
            border-radius: 8px;
            background: #3a3a3a;
            transition: all 0.3s ease;
            min-width: 80px;
            height: 56px;

            &:hover {
                border-color: #007bff;
                background: #1a3a5c;
                color: #007bff;
            }

            .checkbox-input {
                width: 18px;
                height: 18px;
                cursor: pointer;
                accent-color: #007bff;
                margin-bottom: 0.2rem;
            }

            .checkbox-text {
                user-select: none;
                font-weight: 500;
                text-align: center;
                line-height: 1.1;
            }
        }
    }

    .add-card-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border: 2px dashed #6c757d;
        border-radius: 8px;
        background: #3a3a3a;
        color: #b0b0b0;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 80px;
        height: 56px;

        &:hover {
            border-color: #007bff;
            background: #1a3a5c;
            color: #007bff;
        }

        .add-icon {
            font-size: 1.2rem;
            font-weight: 300;
            margin-bottom: 0.2rem;
        }

        .add-text {
            font-size: 0.7rem;
            font-weight: 500;
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
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.3rem 0.8rem;
        border-radius: 6px;
        text-align: center;

        &.conan-title {
            background: linear-gradient(135deg, #4a5a8a, #5a4a7a);
            color: white;
        }

        &.chaeji-title {
            background: linear-gradient(135deg, #b83a2a, #a82a1a);
            color: white;
        }
    }
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.4rem;
}

.card-item {
    background: #2a2a2a;
    border: 2px solid #444;
    border-radius: 6px;
    padding: 0.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 45px;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    &.selected {
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        transform: translateY(-1px);
        
        &::after {
            content: '✓';
            position: absolute;
            top: 2px;
            right: 2px;
            background: #007bff;
            color: white;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.6rem;
            font-weight: bold;
        }
    }

    // Status-based styling
    &.using {
        border-color: #28a745;

        &:hover {
            border-color: #1e7e34;
        }
    }

    &.keeping {
        border-color: #ffc107;

        &:hover {
            border-color: #e0a800;
        }
    }

    &.terminated {
        border-color: #dc3545;
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
            background: #4a5a8a;
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
            background: #b83a2a;
        }
    }

    .card-name {
        font-weight: 400;
        font-size: 0.6rem;
        color: #ffffff;
        text-align: center;
        margin-bottom: 0.2rem;
        word-break: break-word;
        line-height: 1.1;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .card-status {
        font-size: 0.5rem;
        color: #b0b0b0;
        text-align: center;
        padding: 0.1rem 0.3rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        font-weight: 500;
    }
}


// Responsive design
@media (max-width: 768px) {
    .holdings-header {
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;

        .holdings-title {
            font-size: 1.3rem;
            margin-bottom: 0.75rem;
        }

        .header-controls {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
        }

        .add-card-button {
            min-width: 60px;
            padding: 0.4rem 0.8rem;
            height: 48px;

            .add-icon {
                font-size: 1rem;
            }

            .add-text {
                font-size: 0.6rem;
            }
        }

        .filter-controls {
            .checkbox-label {
                font-size: 0.6rem;
                padding: 0.4rem 0.8rem;
                min-width: 60px;
                height: 48px;

                .checkbox-input {
                    width: 16px;
                    height: 16px;
                    margin-bottom: 0.1rem;
                }
            }
        }
    }

    .cards-container {
        gap: 1.5rem;
    }

    .user-cards {
        .user-title {
            font-size: 0.9rem;
            padding: 0.25rem 0.6rem;
            margin-bottom: 0.5rem;
        }
    }

    .cards-grid {
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        gap: 0.3rem;
    }

    .card-item {
        min-height: 40px;
        padding: 0.3rem;

        .card-name {
            font-size: 0.55rem;
            color: #ffffff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .card-status {
            font-size: 0.45rem;
        }
    }

}

@media (max-width: 480px) {
    .card-item {
        .card-name {
            font-size: 0.5rem;
            color: #ffffff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
    }
}
</style>