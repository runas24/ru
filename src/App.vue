<!-- src/App.vue -->
<template>
  <div id="app">
    <Filter @filter="applyFilters" />
    <CharacterCard v-for="character in filteredCharacters" :key="character.id" :character="character" />
    <Pagination :page="page" :totalPages="totalPages" @pageChange="loadCharacters" />
  </div>
</template>

<script>
import axios from 'axios';
import CharacterCard from './components/CharacterCard.vue';
import Pagination from './components/Pagination.vue';
import Filter from './components/Filter.vue';

export default {
  components: {
    CharacterCard,
    Pagination,
    Filter
  },
  data() {
    return {
      characters: [],
      filteredCharacters: [],
      page: 1,
      totalPages: 1,
      nameFilter: '',
      statusFilter: ''
    };
  },
  mounted() {
    this.loadCharacters();
  },
  methods: {
    async loadCharacters(page = 1) {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        this.characters = response.data.results;
        this.totalPages = response.data.info.pages;
        this.filterCharacters();
      } catch (error) {
        console.error('Error loading characters:', error);
      }
    },
    applyFilters(filters) {
      this.nameFilter = filters.name;
      this.statusFilter = filters.status;
      this.filterCharacters();
    },
    filterCharacters() {
      this.filteredCharacters = this.characters.filter(character =>
        character.name.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
        (this.statusFilter ? character.status.toLowerCase() === this.statusFilter.toLowerCase() : true)
      );
    }
  }
};
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
