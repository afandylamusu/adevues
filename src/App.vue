<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchBox data-source-url="http://localhost:57914/contacts/all"/>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'

export default {
  name: 'app',
  components: {
    SearchBox
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
