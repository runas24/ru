<!-- src/components/Pagination.vue -->
<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <span>{{ page }}</span>
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
    },
    onPageChange: {
      type: Function,
      required: true
    }
  },
  methods: {
    prevPage() {
      this.onPageChange(this.page - 1);
    },
    nextPage() {
      this.onPageChange(this.page + 1);
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
