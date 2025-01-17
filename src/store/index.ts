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
        cards: []
    },
    mutations: {
        reset: state => {
            reset(state.cards)
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
                depositBank: '',
                annualFee: '',
                monthlyUsage: '',
                debits: [],
                period: {
                    start: new Date().toISOString().substr(0, 10),
                    end: new Date().toISOString().substr(0, 10)
                },
                selected: true,
                status: CARD_STATUS.USING,
                holder: 'conan'
            })
        },
        selectCard: (state, selectedCard) => {
            reset(state.cards)
            state.cards.find(card => card === selectedCard).selected = true
        },
        delete: async state => {
            const card = state.cards.find(card => card.selected)
            await api.delete(`${card.id}`)

            card.selected = false
            const deleteIndex = state.cards.findIndex(card => card.selectedCard)
            state.cards.splice(deleteIndex, 1)
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
            const card = store.state.cards.find(card => card.selected)
            if (card.id) await api.put(`${card.id}`, card)
            else await api.post('', card)
        }
    },
    getters: {
        cards: state => state.cards || [],
        selectedCard: state => state.cards.find((card: any) => card.selected)
    }
})
