// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api";

function UserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get('/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    if (error) {
        return <p>Error fetching users: {error}</p>;
    }

    return (
        <div>
            <h4>User List</h4>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </ul>
        </div>
    );
}

export default UserList;
