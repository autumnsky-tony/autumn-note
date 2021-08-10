<template>
  <div class="flex justify-center">
    <div class="w-1/2">
      <Editor :previewStyle="'tab'" />
    </div>
  </div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'

// ISSUE : Insert Image base64

export default {
  components: {
    Editor
  }
}
</script>

<style>

</style>