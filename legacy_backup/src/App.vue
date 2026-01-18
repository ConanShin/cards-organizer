<template>
    <div id="app">
        <header class="app-header">
            <h1 class="app-title">Card Organizer</h1>
            <p class="app-subtitle">신용카드 혜택 극대화를 위한 관리 도구</p>
        </header>
        <main class="app-main">
            <!-- Mobile Tab Navigation -->
            <div class="mobile-tabs" v-if="isMobile">
                <button 
                    class="tab-button" 
                    :class="{ active: activeTab === 'holdings' }"
                    @click="activeTab = 'holdings'"
                >
                    <span class="tab-icon">💳</span>
                    카드 현황
                </button>
                <button 
                    class="tab-button" 
                    :class="{ active: activeTab === 'calendar' }"
                    @click="activeTab = 'calendar'"
                >
                    <span class="tab-icon">📅</span>
                    캘린더
                </button>
            </div>

            <div class="main-sections" :class="{ 'mobile-layout': isMobile }">
                <HoldingsView 
                    v-if="!isMobile || activeTab === 'holdings'"
                    class="holdings-section" 
                    :class="{ 'mobile-full': isMobile }" 
                />
                <InformationView 
                    v-if="!isMobile || activeTab === 'calendar'"
                    class="information-section" 
                    :class="{ 'mobile-full': isMobile }" 
                />
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HoldingsView from '@/views/Holdings.vue'
import InformationView from '@/views/Information.vue'

@Component({
    components: {
        HoldingsView,
        InformationView
    }
})
export default class App extends Vue {
    isMobile: boolean = false
    activeTab: string = 'calendar' // 모바일에서 기본적으로 캘린더 탭 표시

    async beforeMount(): Promise<void> {
        try {
            await this.$store.dispatch('fetch')
        } catch (error) {
            console.error('Failed to fetch cards data:', error)
        }
    }

    mounted(): void {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    }

    beforeDestroy(): void {
        window.removeEventListener('resize', this.checkMobile)
    }

    checkMobile(): void {
        this.isMobile = window.innerWidth <= 768
    }
}
</script>

<style lang="scss">
html, body {
    background-color: #1a1a1a;
    margin: 0;
    padding: 0;
}

#app {
    min-height: 100vh;
    background-color: #1a1a1a;
    color: #e0e0e0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
    color: #e0e0e0;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    .app-title {
        margin: 0 0 0.25rem 0;
        font-size: 1.25rem;
        font-weight: 300;
    }

    .app-subtitle {
        margin: 0;
        font-size: 0.55rem;
        opacity: 0.9;
    }
}

.app-main {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 1rem;
    }
}

.mobile-tabs {
    display: flex;
    background: #2d2d2d;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
    overflow: hidden;

    .tab-button {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        background: #3a3a3a;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
        font-weight: 500;
        color: #b0b0b0;

        &:hover {
            background: #4a4a4a;
        }

        &.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            transform: translateY(-1px);
        }

        .tab-icon {
            font-size: 1.2rem;
        }
    }
}

.main-sections {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    min-height: calc(100vh - 200px);

    &.mobile-layout {
        grid-template-columns: 1fr;
        gap: 0;
        min-height: calc(100vh - 200px);
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

.holdings-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;

    &.mobile-full {
        padding: 1rem;
        height: 100%;
        border-radius: 0;
        box-shadow: none;
    }
}

.information-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;

    &.mobile-full {
        padding: 1rem;
        height: 100%;
        border-radius: 0;
        box-shadow: none;
    }
}

// Responsive design
@media (max-width: 768px) {
    .app-header {
        padding: 0.75rem 0;

        .app-title {
            font-size: 1.1rem;
            margin-bottom: 0.2rem;
        }

        .app-subtitle {
            font-size: 0.5rem;
        }
    }
}

// Global utility classes
.horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

// User-specific styling
.conan {
    background-color: rgba(199, 210, 238, 0.3);
    border-left: 4px solid #667eea;
}

.chaeji {
    background-color: rgba(222, 189, 189, 0.3);
    border-left: 4px solid #e74c3c;
}
</style>