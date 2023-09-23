<template>
<div>
  <main-header></main-header>
  <router-view></router-view>
  <main-footer></main-footer></div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}
</style>
