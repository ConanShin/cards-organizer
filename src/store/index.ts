import { create } from 'zustand';
import { Card } from '@/types/card';
import { fetchCards, createCard, updateCard, deleteCard } from '@/services/api';

export interface CardsState {
    cards: Card[];
    selectedCard: Card | null;
    isLoading: boolean;
    error: string | null;

    setCards: (cards: Card[]) => void;
    selectCard: (card: Card) => void;
    resetSelection: () => void;

    loadCards: () => Promise<void>;
    saveCard: (card: Card) => Promise<void>;
    removeCard: (cardId: string) => Promise<void>;
    addLocalCard: (card: Card) => void;
}

const useCardsStore = create<CardsState>((set, get) => ({
    cards: [], // Start empty, load from API
    selectedCard: null,
    isLoading: false,
    error: null,

    setCards: (cards) => set({ cards }),
    selectCard: (card) => set({ selectedCard: card }),
    resetSelection: () => set({ selectedCard: null }),
    addLocalCard: (card) => set((state) => ({
        cards: [...state.cards, card],
        selectedCard: card
    })),

    loadCards: async () => {
        set({ isLoading: true, error: null });
        try {
            const cards = await fetchCards();
            set({ cards, isLoading: false });
        } catch (error) {
            console.error('Failed to load cards:', error);
            set({ isLoading: false, error: 'Failed to load cards' });
        }
    },

    saveCard: async (card: Card) => {
        set({ isLoading: true, error: null });
        try {
            if (card.isNew) {
                await createCard(card);
            } else if (card.id) {
                await updateCard(card);
            } else {
                // Fallback for missing ID on existing card if correct logic wasn't followed
                await createCard(card);
            }
            // Reload to get fresh data (including new IDs)
            await get().loadCards();
            set({ selectedCard: null }); // Close modal/selection on success
        } catch (error) {
            console.error('Failed to save card:', error);
            set({ isLoading: false, error: 'Failed to save card' });
        }
    },

    removeCard: async (cardId: string) => {
        set({ isLoading: true, error: null });
        try {
            const card = get().cards.find(c => c.id === cardId);
            if (card && card.isNew) {
                const newCards = get().cards.filter(c => c.id !== cardId);
                set({ cards: newCards, selectedCard: null, isLoading: false });
                return;
            }

            await deleteCard(cardId);
            await get().loadCards();
            set({ selectedCard: null });
        } catch (error) {
            console.error('Failed to delete card:', error);
            set({ isLoading: false, error: 'Failed to delete card' });
        }
    }
}));

export default useCardsStore;
