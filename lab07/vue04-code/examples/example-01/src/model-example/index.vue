<script>
import MyChild from './MyChild.vue'

export default {
  components: {
    MyChild,
  },
  data() {
    return {
      prop1ForChild: 'HELLO ',
      prop2ForChild: 'WORLD ',
    }
  }
}
</script>

<template>
  <div>
    <MyChild
      v-bind:my-prop="prop1ForChild"
      v-on:update:my-prop="newContent => prop1ForChild = newContent"/>
    <MyChild
      v-model:my-prop="prop2ForChild" />
  </div>
</template>
