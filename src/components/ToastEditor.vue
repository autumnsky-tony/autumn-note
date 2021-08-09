<template>
  <div id="toast-editor">
  </div>
</template>

<script>
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css';

export default {
  name: 'ToastEditor',
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.editor = new Editor({
      el: document.querySelector('#toast-editor'),
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical'
    })
    this.editor.getMarkdown()
  }
}
</script>

<style>

</style>