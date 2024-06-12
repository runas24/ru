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

<style scoped>
.character-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-align: center;
  transition: transform 0.3s;
}
.character-card:hover {
  transform: translateY(-5px);
}
.character-card img {
  max-width: 100%;
  border-radius: 50%;
}
.character-card h2 {
  font-size: 1.5em;
  margin: 10px 0;
}
.character-card p {
  margin: 5px 0;
  color: #555;
}
</style>
