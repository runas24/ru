<!-- App.vue -->
<template>
  <div>
    <div class="filters">
      <input type="text" v-model="filterName" placeholder="Имя">
      <select v-model="filterStatus" placeholder="Статус">
        <option value="">Все</option>
        <option value="alive">Живой</option>
        <option value="dead">Мертвый</option>
        <option value="unknown">Неизвестно</option>
      </select>
      <button @click="applyFilters">Применить</button>
    </div>
    <div class="characters">
      <div class="character" v-for="character in filteredCharacters" :key="character.id">
        <div class="card">
          <img :src="character.image" :alt="character.name">
          <div class="info">
            <h3>{{ character.name }}</h3>
            <p>Статус: {{ character.status }}</p>
            <p>Вид: {{ character.species }}</p>
            <p>Пол: {{ character.gender }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Предыдущая страница</button>
      <button @click="nextPage" :disabled="page === totalPages">Следующая страница</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';

export default {
  name: 'App',
  setup() {
    const characters = ref([]);
    const filteredCharacters = ref([]);
    const filterName = ref('');
    const filterStatus = ref('');
    const page = ref(1);
    const totalPages = ref(1);

    const fetchCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}`);
      const data = await response.json();
      characters.value = data.results;
      totalPages.value = data.info.pages;
    };

    const applyFilters = () => {
      filteredCharacters.value = characters.value.filter(character => {
        const nameMatches = character.name.toLowerCase().includes(filterName.value.toLowerCase());
        const statusMatches = !filterStatus.value || character.status === filterStatus.value;
        return nameMatches && statusMatches;
      });
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

    watch([filterName, filterStatus], () => {
      applyFilters();
    });

    fetchCharacters();

    return {
      filteredCharacters,
      filterName,
      filterStatus,
      applyFilters,
      nextPage,
      prevPage,
      page,
      totalPages
    };
  }
}
</script>

<style>
.filters {
  margin-bottom: 20px;
}

.characters {
  display: flex;
  flex-wrap: wrap;
}

.character {
  width: 200px;
  margin: 10px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.pagination {
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  margin-right: 10px;
}
</style>
