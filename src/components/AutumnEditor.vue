<template>
  <div>
    <div v-for="(sentence, idx) in sentences" :key="idx">
      <component :is="'Heading1'" v-bind="{ content: markdownParser(sentence) }"></component>
    </div>
    <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
    <button @click="setSentences">변환</button>
  </div>
</template>

<script>
import Heading1 from './Heading1.vue'

export default {
  name: 'HelloWorld',
  components: {
    Heading1
  },
  data() {
    return {
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
    }
  }
}
</script>
