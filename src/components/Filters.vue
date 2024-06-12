<template>
  <div class="filters">
    <label for="name">Name:</label>
    <input type="text" v-model="nameFilter" @input="applyFilters">
    
    <label for="status">Status:</label>
    <select v-model="statusFilter" @change="applyFilters">
      <option value="">Any</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    
    <button @click="applyFilters">Apply</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameFilter: '',
      statusFilter: '',
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter', { name: this.nameFilter, status: this.statusFilter });
    },
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 16px;
}

input, select, button {
  margin-right: 8px;
}
</style>
