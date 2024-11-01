// src/context/MilestoneContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MilestoneContext = createContext();

// Create the provider component
export const MilestoneProvider = ({ children }) => {
    // Mock milestone data
    const mockMilestones = [
        {
            id: 1,
            title: "Alpha Release",
            description: "Complete all core features for initial testing.",
            status: "In Progress",
            targetDate: "2024-01-15"
        },
        {
            id: 2,
            title: "Beta Release",
            description: "Fix bugs and polish features for beta testing.",
            status: "Not Started",
            targetDate: "2024-02-15"
        },
        {
            id: 3,
            title: "Launch",
            description: "Prepare for the final launch of the product.",
            status: "Planned",
            targetDate: "2024-03-01"
        }
    ];

    // Initialize state
    const [milestones, setMilestones] = useState(mockMilestones);

    // Add a new milestone
    const addMilestone = (newMilestone) => {
        const milestoneWithId = { id: milestones.length + 1, ...newMilestone };
        setMilestones((prevMilestones) => [...prevMilestones, milestoneWithId]);
    };

    // Edit an existing milestone
    const editMilestone = (updatedMilestone) => {
        setMilestones((prevMilestones) =>
            prevMilestones.map((milestone) =>
                milestone.id === updatedMilestone.id ? updatedMilestone : milestone
            )
        );
    };

    // Delete a milestone by ID
    const deleteMilestone = (milestoneId) => {
        setMilestones((prevMilestones) => prevMilestones.filter((milestone) => milestone.id !== milestoneId));
    };

    return (
        <MilestoneContext.Provider value={{ milestones, addMilestone, editMilestone, deleteMilestone }}>
            {children}
        </MilestoneContext.Provider>
    );
};
