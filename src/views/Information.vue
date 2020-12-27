<template>
    <div class="information section">
        <h5>Detail</h5>
        <div class="box">
            <detail/>
        </div>
        <h5>Calendar</h5>
        <div class="year">
            <span class="arrow" @click="now = now - 1"><</span>
            {{ now }}
            <span class="arrow" @click="now = now + 1">></span>
        </div>
        <div class="box horizontal">
            <div v-for="index in 12">
                <div class="month">{{ month[index - 1] }}</div>
                <div class="bar" v-if="index !== 1"></div>
            </div>
        </div>
        <div class="vertical">
            <row v-for="(card, index) in cards" :card="card" :key="index" :year="now"/>
        </div>
    </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component({
    components: {
        detail: require('@/components/CardDetail').default,
        row: require('@/components/CalendarRow').default
    }
})
export default class Information extends Vue {
    month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    now = new Date().getFullYear()

    get cards() {
        return this.$store.getters.cards
    }
}
</script>

<style scoped lang="scss">
.information.section {
    margin-left: 50px;

    .year {
        text-align: center;
    }

    .arrow {
        padding: 5px;
        cursor: pointer;
    }

    .month {
        min-width: 100px;
        display: inline-flex;
        justify-content: center;
    }

    .bar {
        width: 1px;
        height: 800px;
        position: absolute;
        background-color: rgba(167, 157, 157, 0.5);
    }
}
</style>