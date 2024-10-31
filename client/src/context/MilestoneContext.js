// src/context/MilestoneContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MilestoneContext = createContext();

export const MilestoneProvider = ({ children }) => {
    const [milestones, setMilestones] = useState([]);

    // Load initial milestones
    useEffect(() => {
        const initialMilestones = [
            { id: 1, title: "Alpha Release", goal: "Complete all core features for initial testing.", status: "In Progress", startDate: "2024-01-01", targetDate: "2024-03-01" },
            { id: 2, title: "Beta Release", goal: "Fix bugs and polish features for beta testing.", status: "Planned", startDate: "2024-03-02", targetDate: "2024-05-01" },
        ];
        setMilestones(initialMilestones);
    }, []);

    // Add a new milestone
    const addMilestone = (newMilestone) => {
        const nextId = milestones.length > 0 ? milestones[milestones.length - 1].id + 1 : 1;
        setMilestones((prevMilestones) => [...prevMilestones, { id: nextId, ...newMilestone }]);
    };

    return (
        <MilestoneContext.Provider value={{ milestones, addMilestone }}>
            {children}
        </MilestoneContext.Provider>
    );
};
