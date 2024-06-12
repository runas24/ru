<!-- App.vue -->
<template>
  <div>
    <input v-model="nameFilter" type="text" placeholder="Имя персонажа">
    <select v-model="statusFilter">
      <option value="">Все статусы</option>
      <option v-for="status in statuses" :key="status">{{ status }}</option>
    </select>
    <button @click="applyFilters">Применить</button>
    
    <div v-if="characters.length">
      <div v-for="character in characters" :key="character.id">
        <div>{{ character.name }}</div>
        <div>{{ character.status }}</div>
        <div>{{ character.species }}</div>
      </div>
    </div>

    <button @click="prevPage" :disabled="page <= 1">Предыдущая страница</button>
    <span>Страница {{ page }}</span>
    <button @click="nextPage" :disabled="page >= totalPages">Следующая страница</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const nameFilter = ref('');
const statusFilter = ref('');
const characters = ref([]);
const page = ref(1);
const totalPages = ref(1);
const statuses = ['Живой', 'Мертвый', 'Неизвестно'];

async function fetchData() {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}&name=${nameFilter.value}&status=${statusFilter.value}`);
  const data = await response.json();
  characters.value = data.results;
  totalPages.value = data.info.pages;
}

function applyFilters() {
  fetchData();
}

function nextPage() {
  if (page.value < totalPages.value) {
    page.value++;
    fetchData();
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--;
    fetchData();
  }
}

watch([nameFilter, statusFilter], () => {
  page.value = 1;
  fetchData();
});

fetchData();
</script>

<style>
/* Add your styles here */
</style>
