<script setup>
import { ref, reactive, computed, watch } from 'vue';

// Reactive variables
const title = ref('Vue Composition API Example');
const counter = ref(0);
const inputValue = ref('');

// Reactive object
const items = reactive(['Item 1', 'Item 2', 'Item 3']);

// Methods
const incrementCounter = () => {
  counter.value++;
};

const decrementCounter = () => {
  counter.value--;
};

const addItem = () => {
  items.push(`Item ${items.length + 1}`);
};

const removeItem = (index) => {
  items.splice(index, 1);
};

// Computed property
const computedMessage = computed(() => {
  return `The counter is ${counter.value > 0 ? 'positive' : 'zero or negative'}`;
});

// Watcher
const watchMessage = ref('Counter has not changed');
watch(counter, (newValue, oldValue) => {
  watchMessage.value = `Counter changed from ${oldValue} to ${newValue}`;
});
</script>

<template>
  <div class="app">
    <h1>{{ title }}</h1>

    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increment</button>
    <button @click="decrementCounter">Decrement</button>

    <input v-model="inputValue" placeholder="Type something..." />
    <p>Input Value: {{ inputValue }}</p>

    <p>Computed Message: {{ computedMessage }}</p>

    <h2>Reactive List:</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
    <button @click="addItem">Add Item</button>

    <h2>Watched Property</h2>
    <p>Watch Counter: {{ watchMessage }}</p>
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  margin: 20px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
