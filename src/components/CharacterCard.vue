<template>
    <div class="character-card">
      <img :src="character.image" :alt="character.name" />
      <h3>{{ character.name }}</h3>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .character-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
  }
  </style>
  