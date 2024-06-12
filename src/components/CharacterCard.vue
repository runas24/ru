<!-- CharacterCard.vue -->
<template>
  <div class="character-card">
    <div>{{ character.name }}</div>
    <div>{{ character.status }}</div>
    <!-- Остальные поля персонажа -->
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
  padding: 10px;
  margin: 10px;
}
</style>
