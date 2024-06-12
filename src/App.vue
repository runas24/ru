<template>
  <div id="app">
    <h1>Rick and Morty Characters</h1>
    <CharacterList />
  </div>
</template>

<script setup>
import CharacterList from './components/CharacterList.vue';
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

h1 {
  color: #007bff;
  margin-bottom: 20px;
}
</style>
