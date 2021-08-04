<template>
  <h1>
    {{ content }}
  </h1>
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