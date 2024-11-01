// src/services/userService.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUsers = async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
};
