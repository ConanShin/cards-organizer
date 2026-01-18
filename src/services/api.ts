import axios from 'axios';
import { Card, Debit } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';

const API_BASE_URL = 'https://conanshin-server.azurewebsites.net/cards-organizer/';

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Interface matching the backend response
export interface ApiCard {
    id?: string;
    name: string;
    holder: 'conan' | 'chaeji';
    deposit_bank: string;
    annual_fee: string;
    monthly_usage: string;
    debits: Debit[];
    period_start: string;
    period_end: string;
    status: string;
    deleted?: string;
}

// Mapper functions
const mapApiToCard = (apiCard: ApiCard): Card => {
    return {
        id: apiCard.id,
        name: apiCard.name,
        holder: apiCard.holder,
        depositBank: apiCard.deposit_bank,
        annualFee: apiCard.annual_fee,
        monthlyUsage: apiCard.monthly_usage,
        automaticDebit: apiCard.debits || [],
        period: {
            start: new Date(apiCard.period_start),
            end: new Date(apiCard.period_end),
        },
        status: apiCard.status,
        selected: false,
    };
};

const mapCardToApi = (card: Card): ApiCard => {
    // Format Date to YYYY-MM-DD
    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    return {
        id: card.id,
        name: card.name,
        holder: card.holder,
        deposit_bank: card.depositBank,
        annual_fee: card.annualFee,
        monthly_usage: card.monthlyUsage,
        debits: card.automaticDebit,
        period_start: formatDate(card.period.start),
        period_end: formatDate(card.period.end),
        status: card.status,
    };
};

export const fetchCards = async (): Promise<Card[]> => {
    const response = await api.get<ApiCard[]>('');
    // Filter out deleted cards and map to frontend model
    return response.data
        .filter(card => card.deleted !== 'y')
        .map(mapApiToCard);
};

export const createCard = async (card: Card): Promise<string> => {
    const apiCard = mapCardToApi(card);
    const response = await api.post('', apiCard);
    return response.data.id; // Assuming backend returns the new ID
};

export const updateCard = async (card: Card): Promise<void> => {
    if (!card.id) throw new Error('Card ID is required for update');
    const apiCard = mapCardToApi(card);
    await api.put(`${card.id}`, apiCard);
};

export const deleteCard = async (cardId: string): Promise<void> => {
    await api.delete(`${cardId}`);
};
