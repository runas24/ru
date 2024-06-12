<template>
  <div class="character-card">
    <h2>{{ character.name }}</h2>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Origin: {{ character.origin.name }}</p>
    <p>Last Location: {{ character.location.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
};
</script>

<style scoped>
.character-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
