<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/vuex.vue'
// import HelloWorld from './components/nameSpace.vue'
// import HelloWorld from './components/action.vue'
// import HelloWorld from './components/module.vue'
// import HelloWorld from './components/vuexCreate.vue'
// import HelloWorld from './components/moduleAction.vue'
// import HelloWorld from './vue.observable/observable.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
