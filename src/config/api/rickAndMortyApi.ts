import axios from 'axios';

export const rickAndMortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
