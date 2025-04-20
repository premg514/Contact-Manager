import axios from "axios";
console.log("url", import.meta.env.VITE_BACKEND_URL);
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default API;
