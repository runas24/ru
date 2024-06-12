<template>
    <div class="pagination">
      <button @click="changePage(info.prev)" :disabled="!info.prev">Previous</button>
      <span>Page {{ currentPage }} of {{ info.pages }}</span>
      <button @click="changePage(info.next)" :disabled="!info.next">Next</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    info: {
      type: Object,
      required: true
    }
  });
  
  const currentPage = computed(() => {
    return props.info.prev ? props.info.prev + 1 : 1;
  });
  
  const changePage = (page) => {
    if (page) {
      emit('changePage', page);
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
  