import { create } from 'zustand';
import { Card } from '@/types/card';
import { fetchCards, createCard, updateCard, deleteCard } from '@/services/api';

export interface DialogConfig {
    isOpen: boolean;
    title: string;
    message: string;
    type: 'confirm' | 'alert';
    onConfirm?: () => void;
}

export interface CardsState {
    cards: Card[];
    selectedCard: Card | null;
    isLoading: boolean;
    error: string | null;
    dialog: DialogConfig;

    setCards: (cards: Card[]) => void;
    selectCard: (card: Card) => void;
    resetSelection: () => void;
    showDialog: (config: Omit<DialogConfig, 'isOpen'>) => void;
    hideDialog: () => void;

    loadCards: () => Promise<void>;
    saveCard: (card: Card) => Promise<void>;
    removeCard: (cardId: string) => Promise<void>;
    addLocalCard: (card: Card) => void;
}

const useCardsStore = create<CardsState>((set, get) => ({
    cards: [],
    selectedCard: null,
    isLoading: false,
    error: null,
    dialog: {
        isOpen: false,
        title: '',
        message: '',
        type: 'alert'
    },

    setCards: (cards) => set({ cards }),
    selectCard: (card) => set({ selectedCard: card }),
    resetSelection: () => set({ selectedCard: null }),
    showDialog: (config) => set({
        dialog: { ...config, isOpen: true }
    }),
    hideDialog: () => set((state) => ({
        dialog: { ...state.dialog, isOpen: false }
    })),
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
                await createCard(card);
            }
            await get().loadCards();
            set({ selectedCard: null });

            get().showDialog({
                title: '저장 완료',
                message: `${card.name || '카드'}가 성공적으로 저장되었습니다.`,
                type: 'alert'
            });
        } catch (error) {
            console.error('Failed to save card:', error);
            set({ isLoading: false, error: 'Failed to save card' });
            get().showDialog({
                title: '저장 실패',
                message: '카드 정보를 저장하는 중 오류가 발생했습니다.',
                type: 'alert'
            });
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

            get().showDialog({
                title: '삭제 완료',
                message: '카드가 성공적으로 삭제되었습니다.',
                type: 'alert'
            });
        } catch (error) {
            console.error('Failed to delete card:', error);
            set({ isLoading: false, error: 'Failed to delete card' });
            get().showDialog({
                title: '삭제 실패',
                message: '카드를 삭제하는 중 오류가 발생했습니다.',
                type: 'alert'
            });
        }
    }
}));

export default useCardsStore;
