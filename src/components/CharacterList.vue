<template>
  <div>
    <div>
      <input v-model="name" placeholder="Name">
      <select v-model="status">
        <option value="">Any Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <div class="character-list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </div>
    <div>
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';

const characters = ref([]);
const page = ref(1);
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
};

const nextPage = () => {
  page.value++;
  fetchCharacters();
};

const prevPage = () => {
  page.value--;
  fetchCharacters();
};

onMounted(fetchCharacters);
watch([page, name, status], fetchCharacters);
</script>

<style>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
