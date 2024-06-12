<template>
  <div>
    <input v-model="nameFilter" placeholder="Фильтр по имени">
    <select v-model="statusFilter">
      <option value="">Все статусы</option>
      <option v-for="status in statuses" :value="status">{{ status }}</option>
    </select>
    <button @click="applyFilters">Применить</button>

    <div v-if="loading">Загрузка...</div>

    <div v-else>
      <div v-for="character in filteredCharacters" :key="character.id">
        <div>{{ character.name }}</div>
        <div>{{ character.status }}</div>
        <!-- Добавьте другие поля персонажа -->
      </div>

      <button @click="previousPage" :disabled="currentPage === 1">Предыдущая</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Следующая</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      filteredCharacters: [],
      nameFilter: '',
      statusFilter: '',
      currentPage: 1,
      totalPages: 0,
      loading: true,
      statuses: ['Живой', 'Мёртвый', 'Неизвестно'] // Добавьте другие статусы при необходимости
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    fetchCharacters() {
      // Здесь используйте axios или fetch для получения данных из API
      // После получения данных, сохраните их в this.characters и обновите this.filteredCharacters
    },
    applyFilters() {
      // Примените фильтры по имени и статусу
      this.filteredCharacters = this.characters.filter(character =>
        character.name.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
        (this.statusFilter === '' || character.status === this.statusFilter)
      );
    },
    previousPage() {
      // Переход на предыдущую страницу пагинации
      if (this.currentPage > 1) {
        this.currentPage--;
        // Обновите this.filteredCharacters с учетом текущей страницы
      }
    },
    nextPage() {
      // Переход на следующую страницу пагинации
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        // Обновите this.filteredCharacters с учетом текущей страницы
      }
    }
  }
};
</script>
