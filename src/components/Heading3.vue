<template>
  <h3>
    {{ content }}
  </h3>
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