import axios from "axios";
//configuración inicial del axios

const API_BASE_URL = "http://localhost:3000";

// https://pizza-frontend-fhv7.onrender.com

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
