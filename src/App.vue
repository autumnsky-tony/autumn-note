<template>
  <div id="app">
    <div class="container-fluid">
      <AutumnViewer :compiledMarkdown="compiledMarkdown" />
      <AutumnEditor :input="input" @update="update" />
    </div>
    <button @click="preview">변환하기</button>
  </div>
</template>

<script>
import AutumnEditor from './components/AutumnEditor.vue'
import AutumnViewer from './components/AutumnViewer.vue'

import marked from 'marked'
import _ from 'lodash'

export default {
  name: 'App',
  components: {
    AutumnEditor,
    AutumnViewer,
  },
  data() {
    return {
      input: '# hello\n<h1>안녕하세요</h1>\n ```html\n <h1>안녕하세요</h1>\n```',
      compiledMarkdown: '',
    }
  },
  methods: {  
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    preview() {
      this.compiledMarkdown = marked(this.sanitizedText.replace(/```[^]*?```/g, function (match) {
        return match.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      }))
    }
  },
  computed: {
    sanitizedText() {
      return this.input.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
  }
}
</script>

<style>
.container-fluid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50vh;
}
</style>
