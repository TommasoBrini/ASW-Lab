<script>
import CounterButton from './CounterButton.vue';

export default {
    components: {
        CounterButton
    },
    data() {
        return {
            isVueWorking: true,
            childCount: 0
        }
    },
    methods: {
        handleIncrement() {
            this.childCount++;
        }
    }
}
</script>

<template>
    <h1 class="center">My First SFC APP</h1>
    <div class="center">
        <h2 v-if="isVueWorking">Hello Vue!</h2>
        <h2 v-else>Vue is not working!</h2>
    </div>
    <div class="center">
        <CounterButton @increment="handleIncrement"/>
        <p>Child count: {{ childCount }}</p>
    </div>
</template>

<style scoped>
.center {
    text-align: center;
}
</style>
