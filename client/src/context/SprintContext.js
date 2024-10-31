// src/context/SprintContext.js
import React, { createContext, useState, useEffect } from 'react';

export const SprintContext = createContext();

export const SprintProvider = ({ children }) => {
    const [sprints, setSprints] = useState([]);

    // Mock data for initial sprints
    useEffect(() => {
        const initialSprints = [
            {
                id: 1,
                name: "Sprint 1",
                goal: "Set up the basic project structure and deploy a working prototype.",
                startDate: "2024-01-01",
                endDate: "2024-01-15",
                progress: 40,
            },
            {
                id: 2,
                name: "Sprint 2",
                goal: "Integrate task management and complete the main dashboard functionality.",
                startDate: "2024-01-16",
                endDate: "2024-01-31",
                progress: 25,
            },
        ];
        setSprints(initialSprints);
    }, []);

    const addSprint = (newSprint) => {
        setSprints((prevSprints) => [...prevSprints, { id: sprints.length + 1, ...newSprint }]);
    };

    return (
        <SprintContext.Provider value={{ sprints, addSprint }}>
            {children}
        </SprintContext.Provider>
    );
};
