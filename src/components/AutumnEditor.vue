<template>
  <div id="editor" class="p-5 bg-green-100">
    <textarea
      class="border-2 w-full h-full"
      :value="input"
      @input="update">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'AutumnEditor',
  props: {
    input: {
      type: String
    }
  },
  methods: {
    update(event) {
      this.$emit('update', event)
    }
  }
}
</script>
