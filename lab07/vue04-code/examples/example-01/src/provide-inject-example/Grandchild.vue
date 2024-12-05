<script>
export default {
  inject: ['sharedState'],
};
</script>

<template>
  <div>
    <p>Grandchild: {{ sharedState.count }}</p>
  </div>
</template>
