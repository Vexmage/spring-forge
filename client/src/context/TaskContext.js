// src/context/TaskContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TaskContext = createContext();

// Create the provider component
export const TaskProvider = ({ children }) => {
    // Mock task data
    const mockTasks = [
        {
            id: 1,
            title: "Design the Main Menu",
            description: "Create the main menu layout and style.",
            assignee: "Alice",
            status: "In Progress",
            priority: "High",
        },
        {
            id: 2,
            title: "Implement Character Movement",
            description: "Add WASD controls for character movement.",
            assignee: "Bob",
            status: "To Do",
            priority: "Medium",
        },
        {
            id: 3,
            title: "Set Up Level 1",
            description: "Build the basic structure and enemy placements.",
            assignee: "Charlie",
            status: "Completed",
            priority: "High",
        },
        {
            id: 4,
            title: "Optimize Asset Loading",
            description: "Reduce asset load times to improve performance.",
            assignee: "Dana",
            status: "In Progress",
            priority: "Low",
        },
    ];

    // Initialize tasks with mock data
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock fetch tasks
    const fetchTasks = () => {
        setLoading(true);
        // Simulate an API delay
        setTimeout(() => {
            setTasks(mockTasks);
            setLoading(false);
        }, 500);
    };

    // Add a new task (local only, not persisted)
    const addTask = (newTask) => {
        const taskWithId = { id: tasks.length + 1, ...newTask };
        setTasks((prevTasks) => [...prevTasks, taskWithId]);
    };

    // Update a task’s fields (full edit or partial update)
    const updateTask = (taskId, updatedFields) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedFields } : task
            )
        );
    };

    // Edit an entire task
    const editTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    // Delete a task by ID
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    // Change only the status of a task
    const changeTaskStatus = (taskId, newStatus) => {
        updateTask(taskId, { status: newStatus });
    };

    // Load mock tasks on initial render
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, loading, addTask, editTask, deleteTask, changeTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
};
