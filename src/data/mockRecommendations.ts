import { RecommendedCard } from '@/types/card';

export const mockRecommendations: RecommendedCard[] = [
    {
        id: 'rec-1',
        company: '삼성카드',
        name: '삼성카드 taptap O',
        image: 'https://via.placeholder.com/300x190/1E3A8A/FFFFFF?text=Samsung+taptap+O',
        annualFee: '국내 10,000원 / 해외 10,000원',
        previousMonthPerformance: '30만원 이상',
        benefits: [
            { title: '스타벅스', description: '50% 결제일할인' },
            { title: '교통/통신', description: '10% 결제일할인' },
            { title: '쇼핑', description: '7% 결제일할인' }
        ],
        promotionContent: '최대 15만원 캐시백',
        promotionPeriod: '2026.06.01 ~ 2026.06.30',
        rewardCost: '15만원'
    },
    {
        id: 'rec-2',
        company: '신한카드',
        name: '신한카드 Mr.Life',
        image: 'https://via.placeholder.com/300x190/0284C7/FFFFFF?text=Shinhan+Mr.Life',
        annualFee: '국내 15,000원 / 해외 18,000원',
        previousMonthPerformance: '30만원 이상',
        benefits: [
            { title: '공과금', description: '10% 할인' },
            { title: '편의점/병원', description: '10% 할인' },
            { title: '마트/주유', description: '주말 10% 할인' }
        ],
        promotionContent: '이벤트 응모 시 12만원 캐시백',
        promotionPeriod: '2026.06.01 ~ 2026.06.30',
        rewardCost: '12만원'
    },
    {
        id: 'rec-3',
        company: '현대카드',
        name: '현대카드ZERO Edition2',
        image: 'https://via.placeholder.com/300x190/171717/FFFFFF?text=Hyundai+ZERO',
        annualFee: '국내 10,000원 / 해외 10,000원',
        previousMonthPerformance: '조건 없음',
        benefits: [
            { title: '모든 가맹점', description: '0.7% 기본 할인' },
            { title: '생활 필수 영역', description: '1.5% 할인' },
            { title: '무이자 할부', description: '2~3개월 무이자' }
        ],
        promotionContent: '애플페이 등록 시 추가 5만원 캐시백',
        promotionPeriod: '2026.06.01 ~ 2026.06.30',
        rewardCost: '10만원'
    },
    {
        id: 'rec-4',
        company: 'KB국민카드',
        name: 'KB국민 My WE:SH 카드',
        image: 'https://via.placeholder.com/300x190/F59E0B/FFFFFF?text=KB+My+WE:SH',
        annualFee: '국내 15,000원 / 해외 15,000원',
        previousMonthPerformance: '40만원 이상',
        benefits: [
            { title: '나에게 진심', description: 'KB Pay 10% 할인' },
            { title: '음식점/편의점', description: '10% 할인' },
            { title: '통신/구독', description: '10% 할인' }
        ],
        promotionContent: '최대 16만원 캐시백 (자동이체 포함)',
        promotionPeriod: '2026.06.01 ~ 2026.06.30',
        rewardCost: '16만원'
    }
];
