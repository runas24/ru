<!-- App.vue -->
<template>
  <div class="app">
    <Filter @apply-filters="applyFilters" />
    <div class="characters">
      <CharacterCard v-for="character in filteredCharacters" :key="character.id" :character="character" />
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-change="loadCharacters" />
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import axios from 'axios';
import Filter from './components/Filter.vue';
import CharacterCard from './components/CharacterCard.vue';
import Pagination from './components/Pagination.vue';

export default {
  components: {
    Filter,
    CharacterCard,
    Pagination
  },
  setup() {
    const characters = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const filters = reactive({
      name: '',
      status: ''
    });

    const loadCharacters = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage.value}&name=${filters.name}&status=${filters.status}`);
        characters.value = response.data.results;
        totalPages.value = response.data.info.pages;
      } catch (error) {
        console.error('Error loading characters:', error);
      }
    };

    const applyFilters = () => {
      currentPage.value = 1;
      loadCharacters();
    };

    watch([currentPage, filters], loadCharacters, { deep: true });

    return {
      characters,
      currentPage,
      totalPages,
      filters,
      loadCharacters,
      applyFilters
    };
  }
};
</script>

<style>
.app {
  margin: 20px;
}

.characters {
  display: flex;
  flex-wrap: wrap;
}
</style>
