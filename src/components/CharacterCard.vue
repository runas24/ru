<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name" class="character-image" />
    <div class="character-info">
      <h2>{{ character.name }}</h2>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <!-- Добавьте другие поля, если необходимо -->
    </div>
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
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  width: 200px;
}

.character-image {
  width: 100%;
  border-radius: 5px;
}

.character-info {
  margin-top: 10px;
}
</style>
