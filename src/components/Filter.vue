<template>
  <div class="filter">
    <input v-model="nameFilter" placeholder="Name">
    <select v-model="statusFilter">
      <option value="">All</option>
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
      this.$emit('apply-filters', {
        name: this.nameFilter,
        status: this.statusFilter,
      });
    },
  },
};
</script>

<style scoped>
.filter {
  margin-bottom: 20px;
}

.filter input, .filter select {
  margin-right: 10px;
}
</style>
