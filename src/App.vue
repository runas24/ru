<template>
  <div>
    <input v-model="searchName" placeholder="Search by name" />
    <select v-model="searchStatus">
      <option value="">All</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
    <button @click="applyFilters">Apply</button>

    <div v-if="loading">Loading...</div>

    <div v-if="error">{{ error }}</div>

    <div v-if="characters">
      <div v-for="character in characters" :key="character.id">
        <div>{{ character.name }}</div>
        <div>{{ character.status }}</div>
        <div>{{ character.species }}</div>
        <div>{{ character.type }}</div>
        <div>{{ character.gender }}</div>
        <div>{{ character.origin.name }}</div>
        <div>{{ character.location.name }}</div>
        <!-- Add more character details as needed -->
      </div>
    </div>

    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <span>{{ page }}</span>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RickAndMortyCharacters',
  setup() {
    const characters = ref([]);
    const loading = ref(false);
    const error = ref('');
    const page = ref(1);
    const totalPages = ref(1);
    const searchName = ref('');
    const searchStatus = ref('');

    const fetchCharacters = async () => {
      loading.value = true;
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page.value}&name=${searchName.value}&status=${searchStatus.value}`);
        const data = await response.json();
        characters.value = data.results;
        totalPages.value = data.info.pages;
      } catch (err) {
        error.value = 'Error fetching data';
      } finally {
        loading.value = false;
      }
    };

    const nextPage = () => {
      if (page.value < totalPages.value) {
        page.value++;
        fetchCharacters();
      }
    };

    const prevPage = () => {
      if (page.value > 1) {
        page.value--;
        fetchCharacters();
      }
    };

    const applyFilters = () => {
      page.value = 1;
      fetchCharacters();
    };

    fetchCharacters();

    return {
      characters,
      loading,
      error,
      page,
      totalPages,
      searchName,
      searchStatus,
      nextPage,
      prevPage,
      applyFilters
    };
  }
};
</script>
