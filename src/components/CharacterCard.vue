<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name">
    <h2>{{ character.name }}</h2>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
  </div>
</template>

<script setup>
defineProps(['character']);
</script>

<style>
.character-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
}
.character-card img {
  max-width: 100%;
  border-radius: 5px;
}
</style>
