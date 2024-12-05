<script>
import ModelExample from './model-example/index.vue'
import WatchersExample from './watchers-example/index.vue'
import ProvideInjectExample from './provide-inject-example/Parent.vue'

export default {
  components: {
    ModelExample,
    WatchersExample,
    ProvideInjectExample
  }
}
</script>

<template>
  <ModelExample />
  <hr>
  <WatchersExample />
  <hr>
  <ProvideInjectExample />
</template>
