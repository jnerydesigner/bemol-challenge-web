import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.17.0.4:3333',
});

export default api;
