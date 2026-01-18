import { CARD_STATUS } from "./constant";
import { Card } from "@/types/card";

export const CHAEJI_CARDS: Card[] = [
    {
        name: '삼성 SFC 아시아나',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2012, 0, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: CARD_STATUS.USING,
        holder: 'chaeji'
    },
    {
        name: '국민 올림',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2012, 0, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: CARD_STATUS.USING,
        holder: 'chaeji'
    },
    {
        name: '현대 M3 포인트',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 25),
            end: new Date(2021, 1, 19)
        },
        selected: false,
        status: CARD_STATUS.KEEPING,
        holder: 'chaeji'
    },
    {
        name: '우리 카드의 정석',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2012, 0, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: CARD_STATUS.USING,
        holder: 'chaeji'
    },
    {
        name: '하나 클로벌',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 10),
            end: new Date(2021, 0, 29)
        },
        selected: false,
        status: CARD_STATUS.KEEPING,
        holder: 'chaeji'
    },
    {
        name: '신한 B.BIG',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 25),
            end: new Date(2021, 0, 29)
        },
        selected: false,
        status: CARD_STATUS.USING,
        holder: 'chaeji'
    },
];
