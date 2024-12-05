<script>
export default {
  props: ['myProp'],
  emits: ['update:myProp'],
  methods: {
    onTextChange(event) {
      this.$emit(
        'update:myProp', 
        event.target.value.toUpperCase()
      )
    }
  }
}
</script>

<template>
  <div>
    <input
      type="text"
      v-bind:value="myProp"
      v-on:input="onTextChange" />
  </div>
</template>
