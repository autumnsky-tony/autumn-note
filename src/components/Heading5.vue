<template>
  <h5>
    {{ content }}
  </h5>
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