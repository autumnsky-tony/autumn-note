<template>
  <div class="p-5 bg-blue-100">
    <div v-html="compiledMarkdown"></div>
    test
    <pre>{{ compiledMarkdown }}</pre>
  </div>
</template>

<script>
export default {
  name: 'AutumnViewer',
  props: {
    compiledMarkdown: {
      type: String,
    }
  }
}
</script>

<style>

</style>