// src/api.js

export async function getCharacters(page, nameFilter, statusFilter) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}&status=${statusFilter}`);
    return await response.json();
  }
  