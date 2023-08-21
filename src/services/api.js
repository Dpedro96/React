import axios from 'axios';

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json",
});

export default api;
