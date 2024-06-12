<template>
    <div class="characters-page">
      <Filters @filter="applyFilters" />
      <div class="characters">
        <CharacterCard v-for="character in filteredCharacters" :key="character.id" :character="character" />
      </div>
      <Pagination :currentPage="page" :totalPages="totalPages" @prev="prevPage" @next="nextPage" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import CharacterCard from '@/components/CharacterCard.vue';
  import Pagination from '@/components/Pagination.vue';
  import Filters from '@/components/Filters.vue';
  
  export default {
    components: {
      CharacterCard,
      Pagination,
      Filters,
    },
    data() {
      return {
        characters: [],
        filteredCharacters: [],
        page: 1,
        totalPages: 1,
        nameFilter: '',
        statusFilter: '',
      };
    },
    created() {
      this.fetchCharacters();
    },
    methods: {
      async fetchCharacters() {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${this.page}&name=${this.nameFilter}&status=${this.statusFilter}`);
          this.characters = response.data.results;
          this.totalPages = response.data.info.pages;
          this.applyFilters();
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      },
      applyFilters({ name, status }) {
        this.nameFilter = name;
        this.statusFilter = status;
        this.filteredCharacters = this.characters.filter(character =>
          character.name.toLowerCase().includes(name.toLowerCase()) &&
          (status === '' || character.status === status)
        );
      },
      async prevPage() {
        if (this.page > 1) {
          this.page--;
          await this.fetchCharacters();
        }
      },
      async nextPage() {
        if (this.page < this.totalPages) {
          this.page++;
          await this.fetchCharacters();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
  
  @media (max-width: 768px) {
    .characters {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
  </style>
  