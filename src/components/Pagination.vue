<template>
    <div class="pagination">
      <button @click="changePage(info.prev)" :disabled="!info.prev">Previous</button>
      <span>Page {{ currentPage }} of {{ info.pages }}</span>
      <button @click="changePage(info.next)" :disabled="!info.next">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    computed: {
      currentPage() {
        return this.info.prev ? this.info.prev + 1 : 1;
      }
    },
    methods: {
      changePage(page) {
        if (page) {
          this.$emit('changePage', page);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  button {
    margin: 0 0.5rem;
  }
  </style>
  