// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api', // Set the base URL for your API
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000 // Optional timeout setting in milliseconds
});

export default axiosInstance;
