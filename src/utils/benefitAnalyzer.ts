import { Card } from '@/types/card';
import { CARD_STATUS } from '@/data/constant';

/**
 * 혜택 수령 가능 여부를 판단합니다.
 * 기준: 특정 카드사(company)의 카드를 보유 중이거나,
 * 해지(TERMINATED)한 지 6개월(약 180일)이 경과하지 않았다면 혜택 불가.
 */
export function canReceiveBenefit(cards: Card[], targetCompany: string): boolean {
    const today = new Date();
    const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

    for (const card of cards) {
        // depositBank나 name으로 해당 카드사인지 유추합니다.
        // ex) targetCompany: '삼성카드', card.depositBank: '삼성카드' 또는 '삼성'
        const isSameCompany =
            card.depositBank.includes(targetCompany.replace('카드', '')) ||
            targetCompany.includes(card.depositBank.replace('카드', '')) ||
            card.name.includes(targetCompany.replace('카드', ''));

        if (isSameCompany) {
            if (card.status === CARD_STATUS.USING || card.status === CARD_STATUS.KEEPING) {
                // 현재 사용 중이거나 보관 중이면 신규 발급 혜택 불가
                return false;
            }

            if (card.status === CARD_STATUS.TERMINATED && card.period?.end) {
                const endDate = new Date(card.period.end);
                const timeDiff = today.getTime() - endDate.getTime();
                if (timeDiff < SIX_MONTHS_MS) {
                    // 해지한 지 6개월 미만이면 혜택 불가
                    return false;
                }
            }
        }
    }

    return true; // 걸리는 조건이 없으면 혜택 수령 가능
}
