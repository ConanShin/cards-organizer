// @ts-nocheck
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {CARD_STATUS} from "@/assets/constant";
const api = axios.create({
    baseURL: 'https://conanshin-server.azurewebsites.net/cards-organizer/'
    // baseURL: 'http://localhost:3000/cards-organizer/'
})

Vue.use(Vuex)
const reset = (array: any) => {
    array.forEach((item: any) => {
        item.selected = false
    })
}

export default new Vuex.Store({
    state: {
        cards: [],
        tempCard: null // 임시 새 카드
    },
    mutations: {
        reset: state => {
            reset(state.cards)
            state.tempCard = null
        },
        cards: (state, fetchedCards) => {
            const cards = fetchedCards.map(card => {
                card.selected = false
                return card
            })
            state.cards = cards
        },
        newCard: state => {
            reset(state.cards)
            state.cards.push({
                name: '',
                deposit_bank: '',
                annual_fee: '',
                monthly_usage: '',
                debits: [],
                period_start: new Date().toISOString().substr(0, 10),
                period_end: new Date().toISOString().substr(0, 10),
                selected: true,
                status: CARD_STATUS.USING,
                holder: 'conan'
            })
        },
        selectCard: (state, selectedCard) => {
            reset(state.cards)
            state.tempCard = null // 기존 임시 카드 제거
            state.cards.find(card => card === selectedCard).selected = true
        },
        selectTempCard: (state, tempCard) => {
            reset(state.cards)
            state.tempCard = tempCard
        },
        addMonthlyPayment: state => {
            const monthlyPayment = {name: '', cost: ''}
            const currentCard = state.cards.find(card => card.selected)
            if (!currentCard.debits) currentCard.debits = []
            currentCard.debits.push(monthlyPayment)
        },
        deleteMonthlyPayment: (state, monthlyPayment) => {
            const deleteIndex = state.cards.find(card => card.selected).debits.findIndex(debit => debit === monthlyPayment)
            state.cards.find(card => card.selected).debits.splice(deleteIndex, 1)
        }
    },
    actions: {
        fetch: async store => {
            const {data} = await api.get('')
            store.commit('cards', data.filter(card => card.deleted === 'n'))
        },
        save: async store => {
            const card = store.getters.selectedCard
            
            if (card.isNew) {
                // 임시 카드인 경우 새로 추가
                const response = await api.post('', card)
                // 임시 카드 제거
                store.commit('selectTempCard', null)
            } else if (card.id) {
                // 기존 카드 수정
                await api.put(`${card.id}`, card)
            } else {
                // ID가 없는 기존 카드 (새로 추가)
                const response = await api.post('', card)
                // 새로 생성된 카드의 ID를 업데이트
                card.id = response.data.id
            }
            
            // 저장 후 데이터 다시 가져오기
            await store.dispatch('fetch')
        },
        delete: async (store, cardId) => {
            await api.delete(`${cardId}`)
            
            // 삭제 후 데이터 다시 가져오기
            await store.dispatch('fetch')
        }
    },
    getters: {
        cards: state => state.cards || [],
        selectedCard: state => {
            // 임시 카드가 있으면 임시 카드 반환, 없으면 선택된 카드 반환
            if (state.tempCard) {
                return state.tempCard
            }
            return state.cards.find((card: any) => card.selected)
        }
    }
})
