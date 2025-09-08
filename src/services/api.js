import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR


//O método axios.get é usado para fazer requisições HTTP GET para buscar dados de um servidor.
// Ele faz parte da biblioteca Axios, que simplifica requisições HTTP tanto em ambientes de navegador quanto em Node.js.

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;