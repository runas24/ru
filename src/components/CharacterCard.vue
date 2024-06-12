<!-- src/components/CharacterCard.vue -->
<template>
  <div class="character-card">
    <h2>{{ character.name }}</h2>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
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
  display: inline-block;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
}
</style>
