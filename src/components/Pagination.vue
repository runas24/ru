<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="page === 1">Prev</button>
    <span>{{ page }}</span>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    totalPages: Number,
  },
  methods: {
    nextPage() {
      this.$emit('update-page', this.page + 1);
    },
    prevPage() {
      this.$emit('update-page', this.page - 1);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}
</style>
