<!-- src/components/Pagination.vue -->
<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <span>{{ page }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      this.$emit('pageChange', this.page - 1);
    },
    nextPage() {
      this.$emit('pageChange', this.page + 1);
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 16px;
  text-align: center;
}
</style>
