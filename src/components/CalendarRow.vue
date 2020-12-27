<template>
    <div class="calendar">
        <div class="row" :class="card.holder">
            <div>{{ startDateString }}</div>
            <div>{{ endDateString }}</div>
        </div>
        <div class="name">{{ card.name }}</div>
    </div>
</template>

<script>
import {Vue, Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class CalendarRow extends Vue {
    @Prop({default: {}}) card
    @Prop({default: {}}) year

    get startDate() {
        return new Date(this.card.period.start)
    }

    get endDate() {
        return new Date(this.card.period.end)
    }

    get startPoint() {
        const startOfYear = new Date(this.year, 0, 0)
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.max(Math.floor((this.startDate - startOfYear) / oneDay / 366 * 1200), 0)
    }

    get endPoint() {
        const startOfYear = new Date(this.year, 0, 0)
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.min(Math.floor((this.endDate - startOfYear) / oneDay / 366 * 1200), 1200)
    }

    get startDateString() {
        if (this.startDate.getFullYear() < this.year) return '...'
        else return this.startDate.getDate()
    }

    get endDateString() {
        if (this.endDate.getFullYear() > this.year) return '...'
        else return this.endDate.getDate()
    }

    @Watch('year')
    redraw() {
        if (this.startDate.getFullYear() > this.year) return this.$el.style.display = 'none'
        if (this.endDate.getFullYear() < this.year) return this.$el.style.display = 'none'
        this.$el.style.display = 'block'
        this.$el.style.left = this.startPoint + 'px'
        this.$el.querySelector('.row').style.width = this.endPoint - this.startPoint + 'px'
    }

    mounted() {
        this.redraw()
    }
}
</script>

<style scoped lang="scss">
.calendar {
    position: relative;
    margin: 5px 0;
    font-size: 9px;
}

.row {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    width: inherit;
    padding: 5px 0;
}
</style>