<template>
    <div id="app">
        <header class="app-header">
            <h1 class="app-title">Card Organizer</h1>
            <p class="app-subtitle">신용카드 혜택 극대화를 위한 관리 도구</p>
        </header>
        <main class="app-main">
            <div class="main-sections">
                <HoldingsView class="holdings-section" />
                <InformationView class="information-section" />
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
    async beforeMount(): Promise<void> {
        try {
            await this.$store.dispatch('fetch')
        } catch (error) {
            console.error('Failed to fetch cards data:', error)
        }
    }
}
</script>

<style lang="scss">
#app {
    min-height: 100vh;
    background-color: #f5f5f5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .app-title {
        margin: 0 0 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 300;
    }

    .app-subtitle {
        margin: 0;
        font-size: 1.1rem;
        opacity: 0.9;
    }
}

.app-main {
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.main-sections {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    min-height: calc(100vh - 200px);

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
}

.information-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
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