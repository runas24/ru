<template>
  <div>
    <div class="filters">
      <input v-model="name" placeholder="Name" class="filter-input">
      <select v-model="status" class="filter-select">
        <option value="">Any Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <div class="character-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1" class="pagination-button">Previous</button>
      <span class="page-number">Page {{ page }}</span>
      <button @click="nextPage" :disabled="page === totalPages" class="pagination-button">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';

const characters = ref([]);
const page = ref(1);
const totalPages = ref(1);
const name = ref('');
const status = ref('');

const fetchCharacters = async () => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
    params: {
      page: page.value,
      name: name.value,
      status: status.value,
    }
  });
  characters.value = response.data.results;
  totalPages.value = response.data.info.pages;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const nextPage = () => {
  if (page.value < totalPages.value) {
    page.value++;
    fetchCharacters();
    scrollToTop();
  }
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    fetchCharacters();
    scrollToTop();
  }
};

onMounted(fetchCharacters);
watch([page, name, status], fetchCharacters);
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.filter-input,
.filter-select {
  padding: 10px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.pagination-button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}
.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.pagination-button:hover:not(:disabled) {
  background-color: #0056b3;
}
.page-number {
  font-size: 1.2em;
  margin: 0 10px;
}
</style>
