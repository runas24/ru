<!-- Pagination.vue -->
<template>
  <div class="pagination">
    <button @click="previousPage">Previous</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
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
    previousPage() {
      if (this.currentPage > 1) {
        this.onPageChange(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.onPageChange(this.currentPage + 1);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 20px;
}

button {
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
}
</style>
