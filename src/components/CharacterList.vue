<template>
    <div>
      <Filters @applyFilters="applyFilters" />
      <div class="character-list">
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
      <Pagination :info="info" @changePage="changePage" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import CharacterCard from './CharacterCard.vue';
  import Pagination from './Pagination.vue';
  import Filters from './Filters.vue';
  
  export default {
    components: { CharacterCard, Pagination, Filters },
    data() {
      return {
        characters: [],
        info: {},
        filters: {
          name: '',
          status: ''
        },
        page: 1
      };
    },
    methods: {
      async fetchCharacters() {
        const { name, status } = this.filters;
        const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
          params: {
            page: this.page,
            name,
            status
          }
        });
        this.characters = response.data.results;
        this.info = response.data.info;
      },
      changePage(page) {
        this.page = page;
        this.fetchCharacters();
      },
      applyFilters(filters) {
        this.filters = filters;
        this.page = 1;
        this.fetchCharacters();
      }
    },
    created() {
      this.fetchCharacters();
    }
  };
  </script>
  
  <style scoped>
  .character-list {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  