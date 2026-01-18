import { CARD_STATUS } from "./constant";
import { Card } from "@/types/card";

export const CONAN_CARDS: Card[] = [
    {
        name: '삼성 SFC 3',
        depositBank: '하나은행',
        annualFee: '0원',
        monthlyUsage: '200000원',
        automaticDebit: [],
        period: {
            start: new Date(2014, 7, 1),
            end: new Date(2020, 11, 16)
        },
        selected: false,
        status: CARD_STATUS.TERMINATED,
        holder: 'conan'
    },
    {
        name: 'SC 플러스마일',
        depositBank: 'SC은행',
        annualFee: '50000원',
        monthlyUsage: '500000원',
        automaticDebit: [],
        period: {
            start: new Date(2018, 5, 1),
            end: new Date(2020, 11, 16)
        },
        selected: false,
        status: CARD_STATUS.TERMINATED,
        holder: 'conan'
    },
    {
        name: '현대 M3 유플러스',
        depositBank: '하나은행',
        annualFee: '35000원',
        monthlyUsage: '300000원',
        automaticDebit: [],
        period: {
            start: new Date(2018, 3, 1),
            end: new Date(2020, 11, 16)
        },
        selected: false,
        status: CARD_STATUS.TERMINATED,
        holder: 'conan'
    },
    {
        name: '하나 SK Family',
        depositBank: '하나은행',
        annualFee: '0원',
        monthlyUsage: '300000원',
        automaticDebit: [
            { name: '네이버 멤버쉽', cost: '4900원' },
            { name: 'Youtube Premium', cost: '1.75달러' },
        ],
        period: {
            start: new Date(2020, 1, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: CARD_STATUS.USING,
        holder: 'conan'
    },
    {
        name: '신한 11번가',
        depositBank: '농협은행',
        annualFee: '5000원',
        monthlyUsage: '0원',
        automaticDebit: [
            { name: 'AWS', cost: '5달러' }
        ],
        period: {
            start: new Date(2020, 3, 1),
            end: new Date(2020, 11, 28)
        },
        selected: false,
        status: CARD_STATUS.KEEPING,
        holder: 'conan'
    },
    {
        name: '신한 네이버페이 라인프렌즈',
        depositBank: '농협은행',
        annualFee: '7000원',
        monthlyUsage: '0원',
        automaticDebit: [
            { name: '하이패스', cost: '50000원' }
        ],
        period: {
            start: new Date(2020, 11, 3),
            end: new Date(2020, 11, 28)
        },
        selected: false,
        status: CARD_STATUS.KEEPING,
        holder: 'conan'
    },
    {
        name: '국민 탄탄대로 올쇼핑 티타늄',
        depositBank: '농협은행',
        annualFee: '30000원',
        monthlyUsage: '0원',
        automaticDebit: [
            { name: 'Youtube', cost: '1.75달러' }
        ],
        period: {
            start: new Date(2020, 8, 7),
            end: new Date(2021, 3, 1)
        },
        selected: false,
        status: CARD_STATUS.KEEPING,
        holder: 'conan'
    },
    {
        name: '롯데 LIKIT',
        depositBank: '농협은행',
        annualFee: '15000원',
        monthlyUsage: '0원',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 9),
            end: new Date(2021, 0, 31)
        },
        selected: false,
        status: CARD_STATUS.KEEPING,
        holder: 'conan'
    },
    {
        name: '농협 올바른 New Have',
        depositBank: '농협은행',
        annualFee: '12000원',
        monthlyUsage: '350000원',
        automaticDebit: [
            { name: '아파트 관리비', cost: '190000원' }
        ],
        period: {
            start: new Date(2020, 7, 27),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: CARD_STATUS.USING,
        holder: 'conan'
    }
];
