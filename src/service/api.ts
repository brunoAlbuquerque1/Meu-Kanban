import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meu-kanban.vercel.app'
});

export default api;
