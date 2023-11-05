<template>
  <div id="app">
    <CatalogWrapper/>
  </div>
</template>

<script>
import CatalogWrapper from './components/CatalogWrapper.vue';

export default {
  name: 'App',
  components: {
    CatalogWrapper
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
