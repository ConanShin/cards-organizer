<template>
    <div 
        class="calendar-row" 
        :class="[`holder-${card.holder}`, `status-${card.status}`]"
        :style="timelineStyle"
    >
        <div class="timeline-bar">
            <div class="date-indicators">
                <span class="start-date" v-if="showStartDate">{{ startDateString }}</span>
                <span class="end-date" v-if="showEndDate">{{ endDateString }}</span>
            </div>
        </div>
        <div class="card-info">
            <div class="card-name">{{ card.name || '새 카드' }}</div>
            <div class="card-status">{{ getStatusText(card.status) }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { CARD_STATUS } from '@/assets/constant'

interface Card {
    id?: string
    name: string
    holder: 'conan' | 'chaeji'
    period_start: string
    period_end: string
    status: string
}

@Component
export default class CalendarRow extends Vue {
    @Prop({ required: true }) card!: Card
    @Prop({ required: true }) year!: number
    @Prop({ required: true }) rowIndex!: number

    get startDate(): Date {
        return new Date(this.card.period_start)
    }

    get endDate(): Date {
        return new Date(this.card.period_end)
    }

    get isVisible(): boolean {
        const startYear = this.startDate.getFullYear()
        const endYear = this.endDate.getFullYear()
        return this.year >= startYear && this.year <= endYear
    }

    get showStartDate(): boolean {
        return this.startDate.getFullYear() === this.year
    }

    get showEndDate(): boolean {
        return this.endDate.getFullYear() === this.year
    }

    get startDateString(): string {
        if (this.startDate.getFullYear() < this.year) return '...'
        return this.startDate.getDate().toString()
    }

    get endDateString(): string {
        if (this.endDate.getFullYear() > this.year) return '...'
        return this.endDate.getDate().toString()
    }

    get startPoint(): number {
        const startOfYear = new Date(this.year, 0, 1)
        const oneDay = 1000 * 60 * 60 * 24
        const daysInYear = this.isLeapYear(this.year) ? 366 : 365
        
        if (this.startDate.getFullYear() < this.year) {
            return 0
        }
        
        const daysDiff = Math.floor((this.startDate.getTime() - startOfYear.getTime()) / oneDay)
        return Math.max((daysDiff / daysInYear) * 100, 0)
    }

    get endPoint(): number {
        const startOfYear = new Date(this.year, 0, 1)
        const oneDay = 1000 * 60 * 60 * 24
        const daysInYear = this.isLeapYear(this.year) ? 366 : 365
        
        if (this.endDate.getFullYear() > this.year) {
            return 100
        }
        
        const daysDiff = Math.floor((this.endDate.getTime() - startOfYear.getTime()) / oneDay)
        return Math.min((daysDiff / daysInYear) * 100, 100)
    }

    get timelineStyle(): Record<string, string> {
        if (!this.isVisible) {
            return { display: 'none' }
        }

        const rowHeight = 60 // 각 행의 높이
        const rowSpacing = 8 // 행 간격
        const topPosition = this.rowIndex * (rowHeight + rowSpacing)

        return {
            left: `${this.startPoint}%`,
            width: `${this.endPoint - this.startPoint}%`,
            top: `${topPosition}px`
        }
    }

    getStatusText(status: string): string {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        }
        
        return statusMap[status] || status
    }

    private isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    }

    @Watch('year')
    onYearChange(): void {
        // Vue의 반응성 시스템이 자동으로 처리하므로 별도 로직 불필요
    }
}
</script>

<style scoped lang="scss">
.calendar-row {
    position: absolute;
    height: 60px;
    margin: 2px 0;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 1;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }
}

.timeline-bar {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: all 0.3s ease;

    .date-indicators {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

        .start-date,
        .end-date {
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
            backdrop-filter: blur(4px);
        }
    }
}

.card-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;

    .card-name {
        font-size: 0.8rem;
        font-weight: 600;
        color: white;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 120px;
    }

    .card-status {
        font-size: 0.65rem;
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        font-weight: 500;
    }
}

// Holder-specific styling
.holder-conan {
    .timeline-bar {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #5a6fd8;

        &:hover {
            background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
            border-color: #4c63d2;
        }
    }
}

.holder-chaeji {
    .timeline-bar {
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        border-color: #d63031;

        &:hover {
            background: linear-gradient(135deg, #d63031 0%, #a93226 100%);
            border-color: #c23616;
        }
    }
}

// Status-specific styling
.status-using {
    .timeline-bar {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
}

.status-keeping {
    .timeline-bar {
        opacity: 0.8;
        border-style: dashed;
    }
}

.status-terminated {
    .timeline-bar {
        opacity: 0.6;
        filter: grayscale(0.3);
    }
}

// Responsive design
@media (max-width: 768px) {
    .calendar-row {
        height: 50px;
    }

    .timeline-bar {
        padding: 0 6px;

        .date-indicators {
            font-size: 0.7rem;

            .start-date,
            .end-date {
                padding: 1px 4px;
            }
        }
    }

    .card-info {
        .card-name {
            font-size: 0.7rem;
            max-width: 100px;
        }

        .card-status {
            font-size: 0.6rem;
        }
    }
}

@media (max-width: 480px) {
    .calendar-row {
        height: 45px;
    }

    .card-info {
        .card-name {
            font-size: 0.65rem;
            max-width: 80px;
        }

        .card-status {
            font-size: 0.55rem;
        }
    }
}
</style>