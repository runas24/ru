<template>
  <div id="app">
    <CharactersPage />
  </div>
</template>

<script>
import CharactersPage from './views/CharactersPage.vue';

export default {
  components: {
    CharactersPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
</style>
