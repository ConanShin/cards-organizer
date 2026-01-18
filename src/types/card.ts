
export interface Debit {
    name: string;
    cost: string;
}

export interface CardPeriod {
    start: Date;
    end: Date;
}

export interface Card {
    id?: string;
    name: string;
    holder: 'conan' | 'chaeji';
    depositBank: string;
    annualFee: string;
    monthlyUsage: string;
    automaticDebit: Debit[];
    period: CardPeriod;
    status: string; // Using CARD_STATUS enum value
    selected: boolean;
    isNew?: boolean;
}
