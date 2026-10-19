
import axios from "axios";

const api = axios.create({
    baseURL: "https://gow-shivvu.onrender.com",
    // baseURL: "http://localhost:3000/api",
    withCredentials: true
});

export default api;

