<!-- src/components/Filter.vue -->
<template>
  <div class="filter">
    <input type="text" v-model="nameFilter" placeholder="Name">
    <select v-model="statusFilter">
      <option value="">Any Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
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
      statusFilter: ''
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter', {
        name: this.nameFilter,
        status: this.statusFilter
      });
    }
  }
};
</script>

<style scoped>
.filter {
  margin-bottom: 16px;
}
</style>
