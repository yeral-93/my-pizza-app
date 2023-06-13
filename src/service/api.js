import axios from 'axios';
//configuración inicial del axios

const API_BASE_URL = 'https://pizza-frontend-fhv7.onrender.com';
// http://localhost:3000

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});