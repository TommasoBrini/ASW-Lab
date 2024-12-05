<script>
import Child from './Child.vue';

export default {
  components: { Child },
  data() {
    return {
      state: {
        count: 0
      }
    }
  },
  methods: {
    increment() {
      this.state.count++;
    },
  },
  provide() {
    return {
      sharedState: this.state,
    };
  },
};
</script>

<template>
  <div>
    <p>Shared Count from Parent: {{ state.count }}</p>
    <button @click="increment">Increment from Parent</button>
    <Child />
  </div>
</template>
