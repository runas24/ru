<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    prevPage() {
      this.$emit('prev');
    },
    nextPage() {
      this.$emit('next');
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 16px;
  text-align: center;
}

button {
  margin: 0 8px;
}
</style>
