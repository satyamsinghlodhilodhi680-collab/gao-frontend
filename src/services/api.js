import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.DEV
        ? "http://localhost:3000/api"
        : "https://gao-backend.onrender.com/api",
    withCredentials: true
});

export default api;