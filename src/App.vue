<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <AutumnViewer />
      <AutumnEditor />
    </div>
  </div>
</template>

<script>
import AutumnEditor from './components/AutumnEditor.vue'
import AutumnViewer from './components/AutumnViewer.vue'

export default {
  name: 'App',
  components: {
    AutumnEditor,
    AutumnViewer,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50vh;
}
</style>
