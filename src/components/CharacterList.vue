<template>
    <div>
      <Filters @applyFilters="applyFilters" />
      <div class="character-list">
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
      <Pagination :info="info" @changePage="changePage" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import CharacterCard from './CharacterCard.vue';
  import Pagination from './Pagination.vue';
  import Filters from './Filters.vue';
  
  const characters = ref([]);
  const info = ref({});
  const filters = ref({ name: '', status: '' });
  const page = ref(1);
  
  const fetchCharacters = async () => {
    const { name, status } = filters.value;
    const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
      params: {
        page: page.value,
        name,
        status
      }
    });
    characters.value = response.data.results;
    info.value = response.data.info;
  };
  
  const changePage = (newPage) => {
    page.value = newPage;
    fetchCharacters();
  };
  
  const applyFilters = (newFilters) => {
    filters.value = newFilters;
    page.value = 1;
    fetchCharacters();
  };
  </script>
  
  <style scoped>
  .character-list {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  