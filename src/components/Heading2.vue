<template>
  <h2>
    {{ content }}
  </h2>
</template>

<script>
export default {
  name: 'Heading1',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>