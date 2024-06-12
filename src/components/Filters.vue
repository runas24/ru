<template>
    <div class="filters">
      <input v-model="filters.name" placeholder="Name" />
      <select v-model="filters.status">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button @click="applyFilters">Apply</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const filters = ref({
    name: '',
    status: ''
  });
  
  const applyFilters = () => {
    emit('applyFilters', { ...filters.value });
  };
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  input,
  select {
    margin-right: 0.5rem;
  }
  </style>
  