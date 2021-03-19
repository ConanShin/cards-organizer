<template>
    <div class="card" v-if="card">
        <div class="field">
            <label>카드 이름</label>
            <input v-model="card.name"/>
        </div>
        <div class="field">
            <label>사용자</label>
            <input v-model="card.holder"/>
        </div>
        <div class="field">
            <label>결제 은행</label>
            <input v-model="card.deposit_bank"/>
        </div>
        <div class="field">
            <label>연회비</label>
            <input v-model="card.annual_fee"/>
        </div>
        <div class="field">
            <label>사용금액</label>
            <input v-model="card.monthly_usage"/>
        </div>
        <div class="field vertical">
            <div class="horizontal">
                <label>자동 결제</label>
                <div class="plus" @click="addMonthlyPayment">+</div>
            </div>
            <div class="horizontal" v-for="monthlyPaymanet in card.debits">
                <div class="horizontal">
                    <label>내용</label>
                    <input v-model="monthlyPaymanet.name"/>
                </div>
                <div class="horizontal">
                    <label>금액</label>
                    <input v-model="monthlyPaymanet.cost"/>
                </div>
                <div class="minus" @click="deleteMonthlyPayment(monthlyPaymanet)">-</div>
            </div>
        </div>
        <div class="field vertical">
            <div class="horizontal">
                <label>시작일자</label>
                <input type="date" v-model="card.period_start"/>
            </div>
            <div class="horizontal">
                <label>종료일자</label>
                <input type="date" v-model="card.period_end"/>
            </div>
        </div>
        <div class="field">
            <select v-model="card.status">
                <option value="using">using</option>
                <option value="keeping">keeping</option>
                <option value="terminated">terminated</option>
            </select>
        </div>
        <div class="save button" @click="saveCard">save</div>
        <div class="delete button" @click="deleteCard">delete</div>
    </div>
</template>

<script>
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Card extends Vue {
    get card() {
        return this.$store.getters.selectedCard
    }

    addMonthlyPayment() {
        this.$store.commit('addMonthlyPayment')
        this.$forceUpdate()
    }

    deleteMonthlyPayment(monthlyPayment) {
        this.$store.commit('deleteMonthlyPayment', monthlyPayment)
    }

    saveCard() {
        if (confirm(`${this.card.name}을 저장 하시겠습니까?`)) this.$store.dispatch('save')
    }

    deleteCard() {
        if (confirm(`${this.card.name}을 삭제 하시겠습니까?`)) this.$store.commit('delete')
    }
}
</script>

<style scoped lang="scss">
.field {
    label {
        display: inline-block;
        width: 75px;
    }
    input {
        margin: 5px;
    }
}

.plus,.minus {
    width: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}
.button {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid;
    display: inline-block;
    cursor: pointer;
}
</style>