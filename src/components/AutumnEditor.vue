<template>
  <div>
    <div v-for="(sentence, idx) in sentences" :key="idx">
      <component :is="'Heading1'" v-bind="{ content: markdownParser(sentence) }"></component>
    </div>
    <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
    <button @click="setSentences">변환</button>
  </div>
</template>

<script>
import Heading1 from './Heading1.vue'
import marked from 'marked'
import _ from 'lodash'

export default {
  name: 'HelloWorld',
  components: {
    Heading1
  },
  data() {
    return {
      input: '# hello',
      content: '',
      sentences : [],
    }
  },
  methods: {  
    setSentences() {
      this.sentences = this.content.split('\n')
    },
    markdownParser(sentence) {
      return sentence
    },
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input)
    }
  },
}
</script>
