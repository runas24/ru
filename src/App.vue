<template>
  <div>
    <Filter @apply-filters="applyFilters" />
    <div class="characters">
      <CharacterCard v-for="character in filteredCharacters" :key="character.id" :character="character" />
    </div>
    <Pagination :page="page" :totalPages="totalPages" @update-page="updatePage" />
  </div>
</template>

<script>
import CharacterCard from './components/CharacterCard.vue';
import Pagination from './components/Pagination.vue';
import Filter from './components/Filter.vue';
import { reactive, watch } from 'vue';
import { getCharacters } from './api';

export default {
  components: {
    CharacterCard,
    Pagination,
    Filter,
  },
  setup() {
    const state = reactive({
      characters: [],
      filteredCharacters: [],
      page: 1,
      totalPages: 1,
      nameFilter: '',
      statusFilter: '',
    });

    const fetchCharacters = async () => {
      const response = await getCharacters(state.page, state.nameFilter, state.statusFilter);
      state.characters = response.results;
      state.totalPages = response.info.pages;
    };

    const applyFilters = ({ name, status }) => {
      state.nameFilter = name;
      state.statusFilter = status;
      state.page = 1; // Reset page when applying filters
    };

    const updatePage = (newPage) => {
      state.page = newPage;
    };

    watch(() => [state.page, state.nameFilter, state.statusFilter], fetchCharacters, { immediate: true });

    return { state, applyFilters, updatePage };
  },
};
</script>

<style>
.characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
