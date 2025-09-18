<template>
    <div class="holdings">
        <header class="holdings-header">
            <h2 class="holdings-title">카드 보유 현황</h2>
            <div class="header-controls">
                <div class="search-controls">
                    <div class="search-input-container">
                        <input 
                            v-model="searchCompany"
                            class="search-input"
                            placeholder="카드사명 검색 (예: 삼성, 신한)"
                            @keyup.enter="searchCardCompany"
                        />
                        <button class="search-button" @click="searchCardCompany">
                            🔍
                        </button>
                    </div>
                    <div v-if="searchResults.length > 0" class="search-results">
                        <div class="search-results-header">
                            <h3 class="search-results-title">{{ searchCompany }} 카드사 검색 결과</h3>
                            <button class="close-search-result" @click="clearSearchResult">×</button>
                        </div>
                        <div class="search-results-content">
                            <div v-for="userResult in searchResults" :key="userResult.user" class="user-search-result">
                                <div class="user-header">
                                    <h4 class="user-name">{{ userResult.user }}</h4>
                                </div>
                                <div v-for="result in userResult.results" :key="result.cardName" class="search-result-item">
                                    <div class="card-info">
                                        <span class="card-name">{{ result.cardName }}</span>
                                    </div>
                                    <div class="status-info">
                                        <span v-if="result.status === 'terminated'" class="terminated-info">
                                            가장 최근 탈퇴일: 
                                            <span class="termination-date">{{ formatDate(result.terminationDate || '') }} ({{ getDaysSinceTermination(result.terminationDate || '') }}일 경과)</span>
                                        </span>
                                        <span v-else class="using-info">
                                            탈퇴예정일: 
                                            <span class="end-date">{{ formatDate(result.endDate || '') }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-buttons">
                    <div class="filter-controls">
                        <label class="checkbox-label">
                            <input 
                                type="checkbox" 
                                v-model="showTerminated"
                                class="checkbox-input"
                            />
                            <span class="checkbox-text">해지된 카드 표시</span>
                        </label>
                    </div>
                    <div class="add-card-button" @click="addNewCard" v-if="!isMobile">
                        <div class="add-icon">+</div>
                        <div class="add-text">새 카드 추가</div>
                    </div>
                </div>
            </div>
        </header>
        
        <div class="cards-container">
            <div class="user-cards">
                <h3 class="user-title conan-title">Conan</h3>
                <div class="cards-grid">
                    <div 
                        v-for="(card, index) in conanCards" 
                        :key="`conan-${index}`"
                        :class="getCardClasses(card)"
                        @click="selectCard(card)"
                        class="card-item"
                    >
                        <div class="card-name">{{ card.name || '새 카드' }}</div>
                        <div class="card-status">{{ getStatusText(card.status) }}</div>
                    </div>
                </div>
            </div>
            
            <div class="user-cards">
                <h3 class="user-title chaeji-title">Chaeji</h3>
                <div class="cards-grid">
                    <div 
                        v-for="(card, index) in chaejiCards" 
                        :key="`chaeji-${index}`"
                        :class="getCardClasses(card)"
                        @click="selectCard(card)"
                        class="card-item"
                    >
                        <div class="card-name">{{ card.name || '새 카드' }}</div>
                        <div class="card-status">{{ getStatusText(card.status) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CARD_STATUS } from '@/assets/constant'

// @ts-ignore

interface Card {
    id?: string
    name: string
    holder: 'conan' | 'chaeji'
    status: string
    selected?: boolean
    period_start?: string
    period_end?: string
    deposit_bank?: string
    annual_fee?: string
    monthly_usage?: string
    debits?: any[]
}

interface SearchResult {
    company: string
    terminationDate?: string
    endDate?: string
    user: string
    status: string
    cardName: string
}

interface UserSearchResult {
    user: string
    results: SearchResult[]
}

@Component
export default class Holdings extends Vue {
    showTerminated: boolean = false
    isMobile: boolean = false
    searchCompany: string = ''
    searchResults: UserSearchResult[] = []

    get cards(): Card[] {
        // @ts-ignore
        return this.$store.getters.cards || []
    }

    get conanCards(): Card[] {
        return this.filterCardsByUser('conan')
    }

    get chaejiCards(): Card[] {
        return this.filterCardsByUser('chaeji')
    }

    private filterCardsByUser(holder: 'conan' | 'chaeji'): Card[] {
        const userCards = this.cards.filter(card => card.holder === holder)
        
        if (this.showTerminated) {
            return userCards
        }
        
        return userCards.filter(card => card.status !== CARD_STATUS.TERMINATED)
    }

    getCardClasses(card: Card): string[] {
        const classes = ['card-item', card.holder, card.status]
        
        if (card.selected) {
            classes.push('selected')
        }
        
        return classes
    }

    getStatusText(status: string): string {
        const statusMap: Record<string, string> = {
            [CARD_STATUS.USING]: '사용중',
            [CARD_STATUS.KEEPING]: '보관중',
            [CARD_STATUS.TERMINATED]: '해지됨'
        }
        
        return statusMap[status] || status
    }

    selectCard(card: Card): void {
        // 이미 선택된 카드를 클릭하면 선택 해제
        if (card.selected) {
            // @ts-ignore
            this.$store.commit('reset')
        } else {
            // @ts-ignore
            this.$store.commit('selectCard', card)
        }
    }

    addNewCard(): void {
        // 임시 새 카드 생성 (아직 저장되지 않음)
        const tempCard = {
            name: '',
            deposit_bank: '',
            annual_fee: '',
            monthly_usage: '',
            debits: [],
            period_start: new Date().toISOString().substr(0, 10),
            period_end: new Date().toISOString().substr(0, 10),
            selected: true,
            status: CARD_STATUS.USING,
            holder: 'conan',
            isNew: true // 새 카드임을 표시하는 플래그
        }
        
        // 기존 선택 해제
        // @ts-ignore
        this.$store.commit('reset')
        
        // 임시 카드를 선택된 상태로 설정
        // @ts-ignore
        this.$store.commit('selectTempCard', tempCard)
    }

    getCardCompany(cardName: string): string {
        // 카드 이름을 공백으로 분리하여 첫 번째 인자를 카드사명으로 반환
        return cardName.split(' ')[0] || ''
    }

    searchCardCompany(): void {
        if (!this.searchCompany.trim()) {
            alert('카드사명을 입력해주세요.')
            return
        }

        const companyName = this.searchCompany.trim()
        
        // 해당 카드사의 모든 카드들을 찾기
        const companyCards = this.cards.filter(card => {
            const cardCompany = this.getCardCompany(card.name)
            return cardCompany.toLowerCase().includes(companyName.toLowerCase())
        })

        if (companyCards.length === 0) {
            alert(`${companyName} 카드사의 카드를 찾을 수 없습니다.`)
            this.searchResults = []
            return
        }

        // 사용자별로 그룹화
        const userGroups = new Map<string, Card[]>()
        companyCards.forEach(card => {
            if (!userGroups.has(card.holder)) {
                userGroups.set(card.holder, [])
            }
            userGroups.get(card.holder)!.push(card)
        })

        // 각 사용자별로 가장 최근 카드 찾기
        this.searchResults = Array.from(userGroups.entries()).map(([user, cards]) => {
            // 해지된 카드와 사용중인 카드 분리
            const terminatedCards = cards.filter(card => card.status === CARD_STATUS.TERMINATED)
            const usingCards = cards.filter(card => card.status === CARD_STATUS.USING || card.status === CARD_STATUS.KEEPING)

            let resultCard = null

            // 사용중인 카드가 있으면 우선 표시
            if (usingCards.length > 0) {
                // 가장 최근 종료일을 가진 사용중인 카드 찾기
                resultCard = usingCards.reduce((latest, current) => {
                    const latestDate = new Date(latest.period_end || '')
                    const currentDate = new Date(current.period_end || '')
                    return currentDate > latestDate ? current : latest
                })
            } else if (terminatedCards.length > 0) {
                // 사용중인 카드가 없으면 가장 최근 탈퇴일을 가진 카드 찾기
                resultCard = terminatedCards.reduce((latest, current) => {
                    const latestDate = new Date(latest.period_end || '')
                    const currentDate = new Date(current.period_end || '')
                    return currentDate > latestDate ? current : latest
                })
            }

            return {
                user,
                results: resultCard ? [{
                    company: this.getCardCompany(resultCard.name),
                    cardName: resultCard.name,
                    user: resultCard.holder,
                    status: resultCard.status,
                    terminationDate: resultCard.status === CARD_STATUS.TERMINATED ? resultCard.period_end : undefined,
                    endDate: resultCard.status !== CARD_STATUS.TERMINATED ? resultCard.period_end : undefined
                }] : []
            }
        }).filter(userResult => userResult.results.length > 0)
    }

    clearSearchResult(): void {
        this.searchResults = []
        this.searchCompany = ''
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString)
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    getDaysSinceTermination(terminationDate: string): number {
        const today = new Date()
        const termination = new Date(terminationDate)
        const diffTime = today.getTime() - termination.getTime()
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    checkMobile(): void {
        this.isMobile = window.innerWidth <= 768
    }

    mounted(): void {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    }

    beforeDestroy(): void {
        window.removeEventListener('resize', this.checkMobile)
    }
}
</script>

<style scoped lang="scss">
.holdings {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #2d2d2d;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 1.5rem;
}

.holdings-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #404040;

    .holdings-title {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #e0e0e0;
    }

    .header-controls {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .search-controls {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .search-input-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        box-sizing: border-box;
        overflow: hidden;
    }

    .search-input {
        flex: 1;
        padding: 0.5rem 0.75rem;
        border: 2px solid #555;
        border-radius: 6px;
        background: #3a3a3a;
        color: #e0e0e0;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        box-sizing: border-box;

        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        &::placeholder {
            color: #888;
        }
    }

    .search-button {
        background: #007bff;
        color: white;
        border: none;
        border-radius: 6px;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:hover {
            background: #0056b3;
            transform: translateY(-1px);
        }
    }

    .search-results {
        background: #1a3a5c;
        border: 1px solid #007bff;
        border-radius: 6px;
        color: #e0e0e0;
        margin-top: 0.5rem;

        .search-results-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #007bff;

            .search-results-title {
                margin: 0;
                font-size: 1rem;
                font-weight: 600;
                color: #e0e0e0;
            }

            .close-search-result {
                background: none;
                border: none;
                color: #e0e0e0;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0.25rem;
                border-radius: 3px;
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
            }
        }

        .search-results-content {
            padding: 0.5rem;

            .user-search-result {
                margin-bottom: 1rem;

                &:last-child {
                    margin-bottom: 0;
                }

                .user-header {
                    margin-bottom: 0.5rem;

                    .user-name {
                        margin: 0;
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: #007bff;
                        padding: 0.25rem 0.5rem;
                        background: rgba(0, 123, 255, 0.1);
                        border-radius: 4px;
                        display: inline-block;
                    }
                }

                .search-result-item {
                    padding: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                    margin-left: 0.5rem;

                    .card-info {
                        margin-bottom: 0.5rem;

                        .card-name {
                            color: #e0e0e0;
                            font-weight: 500;
                            font-size: 0.9rem;
                        }
                    }

                    .status-info {
                        font-size: 0.85rem;

                        .terminated-info {
                            color: #dc3545;
                        }

                        .using-info {
                            color: #28a745;
                        }

                        .termination-date,
                        .end-date {
                            color: #ffc107;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }

    .header-buttons {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .filter-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .checkbox-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.7rem;
            color: #b0b0b0;
            padding: 0.5rem 0.8rem;
            border: 2px dashed #6c757d;
            border-radius: 8px;
            background: #3a3a3a;
            transition: all 0.3s ease;
            min-width: 80px;
            max-width: 80px;
            height: 56px;

            &:hover {
                border-color: #007bff;
                background: #1a3a5c;
                color: #007bff;
            }

            .checkbox-input {
                width: 18px;
                height: 18px;
                cursor: pointer;
                accent-color: #007bff;
                margin-bottom: 0.2rem;
            }

            .checkbox-text {
                user-select: none;
                font-weight: 500;
                text-align: center;
                line-height: 1.1;
            }
        }
    }

    .add-card-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.8rem;
        border: 2px dashed #6c757d;
        border-radius: 8px;
        background: #3a3a3a;
        color: #b0b0b0;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 80px;
        max-width: 80px;
        height: 56px;

        &:hover {
            border-color: #007bff;
            background: #1a3a5c;
            color: #007bff;
        }

        .add-icon {
            font-size: 1.2rem;
            font-weight: 300;
            margin-bottom: 0.2rem;
        }

        .add-text {
            font-size: 0.7rem;
            font-weight: 500;
        }
    }
}

.cards-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.user-cards {
    .user-title {
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.3rem 0.8rem;
        border-radius: 6px;
        text-align: center;

        &.conan-title {
            background: linear-gradient(135deg, #4a5a8a, #5a4a7a);
            color: white;
        }

        &.chaeji-title {
            background: linear-gradient(135deg, #b83a2a, #a82a1a);
            color: white;
        }
    }
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.4rem;
}

.card-item {
    background: #2a2a2a;
    border: 2px solid #444;
    border-radius: 6px;
    padding: 0.4rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 45px;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    &.selected {
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        transform: translateY(-1px);
        
        &::after {
            content: '✓';
            position: absolute;
            top: 2px;
            right: 2px;
            background: #007bff;
            color: white;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.6rem;
            font-weight: bold;
        }
    }

    // Status-based styling
    &.using {
        border-color: #28a745;

        &:hover {
            border-color: #1e7e34;
        }
    }

    &.keeping {
        border-color: #ffc107;

        &:hover {
            border-color: #e0a800;
        }
    }

    &.terminated {
        border-color: #dc3545;
        opacity: 0.7;

        &:hover {
            border-color: #c82333;
            opacity: 0.9;
        }
    }

    // User-specific styling
    &.conan {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #4a5a8a;
        }
    }

    &.chaeji {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #b83a2a;
        }
    }

    .card-name {
        font-weight: 400;
        font-size: 0.6rem;
        color: #ffffff;
        text-align: center;
        margin-bottom: 0.2rem;
        word-break: break-word;
        line-height: 1.1;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .card-status {
        font-size: 0.5rem;
        color: #b0b0b0;
        text-align: center;
        padding: 0.1rem 0.3rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        font-weight: 500;
    }
}


// Responsive design
@media (max-width: 768px) {
    .holdings-header {
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;

        .holdings-title {
            font-size: 1.3rem;
            margin-bottom: 0.75rem;
        }

    .header-controls {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .search-controls {
        width: 100%;
    }

    .search-input-container {
        flex-direction: column;
        gap: 0.5rem;
    }

    .search-input {
        width: 100%;
        font-size: 0.8rem;
    }

    .search-button {
        width: 100%;
        font-size: 0.9rem;
    }

    .search-results {
        .search-results-header {
            padding: 0.5rem 0.75rem;

            .search-results-title {
                font-size: 0.9rem;
            }
        }

        .search-results-content {
            padding: 0.25rem;

            .user-search-result {
                margin-bottom: 0.75rem;

                .user-header {
                    .user-name {
                        font-size: 0.8rem;
                        padding: 0.2rem 0.4rem;
                    }
                }

                .search-result-item {
                    padding: 0.4rem;
                    margin-left: 0.25rem;

                    .card-info {
                        margin-bottom: 0.4rem;

                        .card-name {
                            font-size: 0.8rem;
                        }
                    }

                    .status-info {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }

        .add-card-button {
            min-width: 60px;
            padding: 0.4rem 0.8rem;
            height: 48px;

            .add-icon {
                font-size: 1rem;
            }

            .add-text {
                font-size: 0.6rem;
            }
        }

        .filter-controls {
            .checkbox-label {
                font-size: 0.6rem;
                padding: 0.4rem 0.8rem;
                min-width: 60px;
                height: 48px;

                .checkbox-input {
                    width: 16px;
                    height: 16px;
                    margin-bottom: 0.1rem;
                }
            }
        }
    }

    .header-buttons {
        gap: 0.4rem;
    }

    .cards-container {
        gap: 1.5rem;
    }

    .user-cards {
        .user-title {
            font-size: 0.9rem;
            padding: 0.25rem 0.6rem;
            margin-bottom: 0.5rem;
        }
    }

    .cards-grid {
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        gap: 0.3rem;
    }

    .card-item {
        min-height: 40px;
        padding: 0.3rem;

        .card-name {
            font-size: 0.55rem;
            color: #ffffff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .card-status {
            font-size: 0.45rem;
        }
    }

}

@media (max-width: 480px) {
    .card-item {
        .card-name {
            font-size: 0.5rem;
            color: #ffffff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
    }
}
</style>