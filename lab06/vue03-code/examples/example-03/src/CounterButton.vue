<template>
    <button @click="increment">Click me! ({{ click }} click)</button>
</template>

<script>
export default {
    data() {
        return {
            click: 0
        }
    },
    emits: ['increment'],
    methods: {
        increment() {
            this.click++;
            this.$emit('increment', this.click);
        }
    }
}
</script>
