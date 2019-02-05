<template>
  <div id="app">
    <div id="vue-repos">
      <h1>Vue.js repositories</h1> 
      <index msg="this is where i should put the for-loop"/>
    </div>
  </div>
</template>

<script>bb
import index from './components/index.vue'

const app = new Vue({
  el: '#vue-repos',
  data: {
    title: 'Vue.js repositories',
    repos: []
  },
})

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>

html {
  background-color: lightgoldenrodyellow; 
  text-align: center;
}

</style>

<!-- Comment <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
