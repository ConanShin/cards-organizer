<template>
    <div id="app">
        <h3>Card Organizer</h3>
        <div class="sections">
            <left/>
            <right/>
        </div>
    </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'

@Component({
    components: {
        left: require('@/views/Holdings').default,
        right: require('@/views/Information').default
    }
})
export default class App extends Vue {
    beforeMount() {
        this.$store.dispatch('fetch')
    }
}
</script>

<style lang="scss">
.sections {
    display: flex;
    overflow-x: hidden;
}

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

.conan {
    background-color: rgb(199, 210, 238);
    opacity: 0.5;
}
.chaeji {
    background-color: rgb(222, 189, 189);
    opacity: 0.5;
}
</style>