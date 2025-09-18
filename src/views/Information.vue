<template>
    <div class="information">
        <div class="information-content">
            <!-- Calendar Section -->
            <section class="calendar-section">
                <header class="section-header">
                    <h2 class="section-title">카드 보유 기간</h2>
                    <div class="year-navigation">
                        <button 
                            class="nav-button" 
                            @click="previousYear"
                            :disabled="currentYear <= minYear"
                        >
                            <i class="arrow-left">‹</i>
                        </button>
                        <span class="current-year">{{ currentYear }}</span>
                        <button 
                            class="nav-button" 
                            @click="nextYear"
                            :disabled="currentYear >= maxYear"
                        >
                            <i class="arrow-right">›</i>
                        </button>
                    </div>
                </header>

                <div class="calendar-container">
                    <!-- Month Headers -->
                    <div class="month-headers">
                        <div 
                            v-for="(month, index) in monthNames" 
                            :key="index"
                            class="month-header"
                        >
                            {{ month }}
                        </div>
                    </div>

                    <!-- Calendar Timeline -->
                    <div class="timeline-container" :style="{ height: timelineHeight }">
                        <div class="timeline-grid">
                            <div 
                                v-for="index in 12" 
                                :key="index"
                                class="month-column"
                            >
                                <div 
                                    v-if="index !== 1" 
                                    class="month-divider"
                                ></div>
                            </div>
                        </div>
                        
                        <div class="cards-timeline">
                            <CalendarRow 
                                v-for="(card, index) in visibleCards" 
                                :key="`${card.id || index}-${currentYear}`"
                                :card="card" 
                                :year="currentYear"
                                :row-index="index"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Card Detail Modal Popup -->
        <div v-if="selectedCard" class="modal-overlay" @click="closeCardDetail">
            <div class="modal-content" @click.stop>
                <div class="modal-header">
                    <div class="modal-title-section">
                        <h3 class="modal-title">{{ selectedCard.name || '새 카드' }}</h3>
                        <div class="modal-status-badge" :class="`status-${selectedCard.status}`">
                            {{ getStatusText(selectedCard.status) }}
                        </div>
                    </div>
                    <button class="modal-close-button" @click="closeCardDetail">
                        <span class="close-icon">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <CardDetail />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CardDetail from '@/components/CardDetail.vue'
import CalendarRow from '@/components/CalendarRow.vue'

interface Card {
    id?: string
    name: string
    holder: 'conan' | 'chaeji'
    period_start: string
    period_end: string
    status: string
}

@Component({
    components: {
        CardDetail,
        CalendarRow
    }
})
export default class Information extends Vue {
    monthNames: string[] = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ]
    
    currentYear: number = new Date().getFullYear()
    minYear: number = 2020
    maxYear: number = new Date().getFullYear() + 5
    isMobile: boolean = false

    get cards(): Card[] {
        return this.$store.getters.cards || []
    }

    get selectedCard(): Card | null {
        return this.$store.getters.selectedCard || null
    }

    get visibleCards(): Card[] {
        const filteredCards = this.cards.filter(card => {
            const startYear = new Date(card.period_start).getFullYear()
            const endYear = new Date(card.period_end).getFullYear()
            
            return this.currentYear >= startYear && this.currentYear <= endYear
        })

        // 상태별, 사용자별로 정렬 (해지된 카드는 하단에)
        return filteredCards.sort((a, b) => {
            // 먼저 상태별로 정렬 (해지되지 않은 카드가 먼저)
            if (a.status === 'terminated' && b.status !== 'terminated') return 1
            if (a.status !== 'terminated' && b.status === 'terminated') return -1
            
            // 같은 상태 내에서는 사용자별로 정렬
            if (a.holder === b.holder) {
                // 같은 사용자 내에서는 시작일로 정렬
                return new Date(a.period_start).getTime() - new Date(b.period_start).getTime()
            }
            return a.holder === 'conan' ? -1 : 1
        })
    }

    get timelineHeight(): string {
        const rowHeight = 24
        const rowSpacing = 2
        const totalHeight = this.visibleCards.length * (rowHeight + rowSpacing) + 100 // 여유 공간
        return `${Math.max(totalHeight, 400)}px`
    }

    previousYear(): void {
        if (this.currentYear > this.minYear) {
            this.currentYear--
        }
    }

    nextYear(): void {
        if (this.currentYear < this.maxYear) {
            this.currentYear++
        }
    }

    goToCurrentYear(): void {
        this.currentYear = new Date().getFullYear()
    }

    closeCardDetail(): void {
        this.$store.commit('reset')
    }

    getStatusText(status: string): string {
        const statusMap: Record<string, string> = {
            'using': '사용중',
            'keeping': '보관중',
            'terminated': '해지됨'
        }
        
        return statusMap[status] || status
    }

    shouldShowUserDivider(card: Card, index: number): boolean {
        // 첫 번째 카드이거나 이전 카드와 다른 사용자인 경우 구분선 표시
        if (index === 0) return true
        
        const previousCard = this.visibleCards[index - 1]
        return previousCard.holder !== card.holder
    }

    getHolderName(holder: string): string {
        const holderNames: Record<string, string> = {
            'conan': 'Conan',
            'chaeji': 'Chaeji'
        }
        return holderNames[holder] || holder
    }

    getAdjustedRowIndex(index: number): number {
        // 구분선을 고려하여 실제 행 인덱스 계산
        let adjustedIndex = index
        
        // 현재 인덱스보다 앞에 있는 구분선의 개수를 계산
        for (let i = 0; i < index; i++) {
            if (this.shouldShowUserDivider(this.visibleCards[i], i)) {
                adjustedIndex++
            }
        }
        
        return adjustedIndex
    }

    getDividerTopPosition(index: number): number {
        const rowHeight = 60
        const rowSpacing = 8
        const dividerHeight = 30
        
        let topPosition = 0
        
        // 현재 인덱스까지의 모든 카드와 구분선의 높이를 계산
        for (let i = 0; i < index; i++) {
            if (this.shouldShowUserDivider(this.visibleCards[i], i)) {
                topPosition += dividerHeight
            }
            topPosition += rowHeight + rowSpacing
        }
        
        return topPosition
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
.information {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #2d2d2d;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 1.5rem;
}

.information-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #404040;

    .section-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #e0e0e0;
    }

    .close-button {
        background: #dc3545;
        color: white;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        font-weight: bold;

        &:hover {
            background: #c82333;
            transform: scale(1.1);
        }

        .close-icon {
            line-height: 1;
        }
    }
}


// Calendar Section
.calendar-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    background: #3a3a3a;
    border-radius: 8px;
    padding: 1rem;

    &.mobile-only {
        flex: 1 1 100%;
        height: 100%;
        margin: 0;
    }
}

.year-navigation {
    display: flex;
    align-items: center;
    gap: 1rem;

    .nav-button {
        background: #4a4a4a;
        color: #e0e0e0;
        border: 2px solid #666;
        border-radius: 8px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        font-weight: bold;

        &:hover:not(:disabled) {
            background: #5a5a5a;
            border-color: #777;
            transform: scale(1.05);
        }

        &:disabled {
            background: #3a3a3a;
            border-color: #555;
            cursor: not-allowed;
            opacity: 0.6;
        }

        .arrow-left,
        .arrow-right {
            font-style: normal;
        }
    }

    .current-year {
        font-size: 1.5rem;
        font-weight: 600;
        color: #e0e0e0;
        min-width: 80px;
        text-align: center;
    }
}

.calendar-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #3a3a3a;
    border-radius: 12px;
    border: 1px solid #555;
    overflow: hidden;
}

.month-headers {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background: #4a4a4a;
    border-bottom: 2px solid #666;

    .month-header {
        padding: 1rem 0.5rem;
        text-align: center;
        font-weight: 600;
        color: #e0e0e0;
        font-size: 0.9rem;
        border-right: 1px solid #666;

        &:last-child {
            border-right: none;
        }
    }
}

.timeline-container {
    flex: 1;
    position: relative;
    overflow-x: auto;
    overflow-y: auto;
}

.cards-timeline {
    position: relative;
    min-height: 100%;
    padding-bottom: 2rem; // 추가 공간 확보
}

.timeline-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    pointer-events: none;

    .month-column {
        position: relative;
        border-right: 1px solid rgba(233, 236, 239, 0.5);

        &:last-child {
            border-right: none;
        }

        .month-divider {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 2px;
            background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(167, 157, 157, 0.3) 10%,
                rgba(167, 157, 157, 0.3) 90%,
                transparent 100%
            );
        }
    }
}

.cards-timeline {
    position: relative;
    z-index: 1;
    padding: 1rem 0;
    min-height: 100%;
}

.user-divider {
    position: absolute;
    left: 0;
    right: 0;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-weight: 600;
    font-size: 0.9rem;
    z-index: 5;
    margin: 0;

    .divider-label {
        background: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: 2px solid;
    }

    &.divider-conan {
        .divider-label {
            color: #667eea;
            border-color: #667eea;
            background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
        }
    }

    &.divider-chaeji {
        .divider-label {
            color: #e74c3c;
            border-color: #e74c3c;
            background: linear-gradient(135deg, #ffebee, #fce4ec);
        }
    }
}

// Responsive design
@media (max-width: 1024px) {
    .information-content {
        gap: 1.5rem;
    }

    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        .year-navigation {
            align-self: center;
        }

        .close-button {
            width: 28px;
            height: 28px;
            font-size: 1rem;
        }
    }

    .month-headers {
        .month-header {
            padding: 0.75rem 0.25rem;
            font-size: 0.8rem;
        }
    }
}

@media (max-width: 768px) {
    .detail-container {
        padding: 1rem;
    }

    .year-navigation {
        .nav-button {
            width: 35px;
            height: 35px;
            font-size: 1rem;
        }

        .current-year {
            font-size: 1.2rem;
            min-width: 60px;
        }
    }

    .month-headers {
        .month-header {
            padding: 0.5rem 0.1rem;
            font-size: 0.7rem;
        }
    }

    .user-divider {
        height: 25px;
        font-size: 0.8rem;

        .divider-label {
            padding: 0.2rem 0.6rem;
            font-size: 0.8rem;
        }
    }
}

// Modal Popup Styles
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background: #2d2d2d;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    max-width: 90vw;
    max-height: 90vh;
    width: 800px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9ecef;

    .modal-title-section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .modal-title {
        margin: 0;
        font-size: 1.3rem;
        font-weight: 600;
    }

    .modal-status-badge {
        padding: 0.2rem 0.6rem;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.3px;
        align-self: flex-start;

        &.status-using {
            background: rgba(40, 167, 69, 0.9);
        }

        &.status-keeping {
            background: rgba(255, 193, 7, 0.9);
            color: #212529;
        }

        &.status-terminated {
            background: rgba(220, 53, 69, 0.9);
        }
    }

    .modal-close-button {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }

        .close-icon {
            line-height: 1;
        }
    }
}

.modal-body {
    flex: 1;
    overflow-y: auto;
    max-height: calc(90vh - 80px);
    background: #2d2d2d;
}

// Responsive modal
@media (max-width: 768px) {
    .modal-content {
        width: 95vw;
        max-height: 95vh;
        margin: 1rem;
    }

    .modal-header {
        padding: 0.75rem 1rem;

        .modal-title {
            font-size: 1.1rem;
        }

        .modal-status-badge {
            font-size: 0.65rem;
            padding: 0.15rem 0.5rem;
        }

        .modal-close-button {
            width: 28px;
            height: 28px;
            font-size: 1.3rem;
        }
    }

    .modal-body {
        max-height: calc(95vh - 70px);
    }
}
</style>