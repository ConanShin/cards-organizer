<template>
    <div class="information">
        <div class="information-content">
            <!-- Card Detail Section -->
            <section class="detail-section">
                <header class="section-header">
                    <h2 class="section-title">카드 상세 정보</h2>
                </header>
                <div class="detail-container">
                    <CardDetail v-if="selectedCard" />
                    <div v-else class="no-selection">
                        <div class="no-selection-icon">💳</div>
                        <p class="no-selection-text">카드를 선택해주세요</p>
                    </div>
                </div>
            </section>

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

    get cards(): Card[] {
        return this.$store.getters.cards || []
    }

    get selectedCard(): Card | null {
        return this.$store.getters.selectedCard || null
    }

    get visibleCards(): Card[] {
        return this.cards.filter(card => {
            const startYear = new Date(card.period_start).getFullYear()
            const endYear = new Date(card.period_end).getFullYear()
            
            return this.currentYear >= startYear && this.currentYear <= endYear
        })
    }

    get timelineHeight(): string {
        const rowHeight = 60
        const rowSpacing = 8
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
}
</script>

<style scoped lang="scss">
.information {
    height: 100%;
    display: flex;
    flex-direction: column;
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
    border-bottom: 2px solid #e9ecef;

    .section-title {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
    }
}

// Detail Section
.detail-section {
    flex: 0 0 auto;
}

.detail-container {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 1.5rem;
    min-height: 200px;
}

.no-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: #6c757d;

    .no-selection-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }

    .no-selection-text {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 500;
    }
}

// Calendar Section
.calendar-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.year-navigation {
    display: flex;
    align-items: center;
    gap: 1rem;

    .nav-button {
        background: #007bff;
        color: white;
        border: none;
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
            background: #0056b3;
            transform: scale(1.05);
        }

        &:disabled {
            background: #6c757d;
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
        color: #2c3e50;
        min-width: 80px;
        text-align: center;
    }
}

.calendar-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    overflow: hidden;
}

.month-headers {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background: #f8f9fa;
    border-bottom: 2px solid #e9ecef;

    .month-header {
        padding: 1rem 0.5rem;
        text-align: center;
        font-weight: 600;
        color: #495057;
        font-size: 0.9rem;
        border-right: 1px solid #e9ecef;

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
}
</style>