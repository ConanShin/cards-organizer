<template>
    <div class="holdings section">
        <div>
            <h5>카드 및 관리비</h5>
            <input type="checkbox" v-model="showTerminated"/>
            <span>해지카드 표시</span>
        </div>
        <div class="deck">
            <div class="cards">
                <div :class="['card', card.holder, card.status]" v-for="(card, index) in conanCards" :cardIndex="index"
                     @click="select(card)">{{ card.name }}
                </div>
            </div>
            <div class="cards">
                <div :class="['card', card.holder, card.status]" v-for="(card, index) in chaejiCards" :cardIndex="index"
                     @click="select(card)">{{ card.name }}
                </div>
                <div class="new card" @click="add">+</div>
            </div>
        </div>
    </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Holdings extends Vue {
    showTerminated = false

    get cards() {
        return this.$store.getters.cards
    }

    get conanCards() {
        if(this.showTerminated) return this.cards.filter(card => card.holder === 'conan')
        else return this.cards.filter(card => card.holder === 'conan' && card.status !== 'terminated')
    }

    get chaejiCards() {
        if(this.showTerminated) return this.cards.filter(card => card.holder === 'chaeji')
        else return this.cards.filter(card => card.holder === 'chaeji' && card.status !== 'terminated')
    }

    add() {
        this.$store.commit('newCard')
    }

    select(card) {
        this.$store.commit('selectCard', card)
    }
}
</script>

<style scoped lang="scss">
.holdings.section {
}

.deck {
    display: flex;
}

.cards {
    width: 200px;
    margin-right: 10px;
}

.card {
    width: 100%;
    height: 100px;
    border: 2px solid;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 5px;
    font-size: 12px;

    &.using {
        border-color: green
    }

    &.keeping {
        border-color: yellow
    }

    &.terminated {
        border-color: red
    }
}
</style>