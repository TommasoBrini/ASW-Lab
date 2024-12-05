<script>
export default {
  data() {
    return {
      count: 0,
      result: 0 // product of count and count - 1
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`)
      this.result = oldValue * newValue
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<template>
  <div>
    <button v-on:click="increment">Click me!</button>
    <div>Click {{ count }}</div>
    <div>Result: {{ result }}</div>
  </div>
</template>
