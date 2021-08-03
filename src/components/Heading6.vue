<template>
  <h6>
    {{ content }}
  </h6>
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