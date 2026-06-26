
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

export interface Benefit {
    title: string;
    description: string;
}

export interface RecommendedCard {
    id: string;
    company: string; // e.g. "삼성", "신한"
    name: string;
    image: string;
    annualFee: string;
    previousMonthPerformance: string;
    benefits: Benefit[];
    promotionContent: string;
    promotionPeriod: string;
    rewardCost: string;
}
