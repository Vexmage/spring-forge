// src/context/SprintContext.js
import React, { createContext, useState } from 'react';

export const SprintContext = createContext();

export const SprintProvider = ({ children }) => {
    const [sprints, setSprints] = useState([
        {
            id: 1,
            name: "Sprint 1",
            goal: "Set up basic project structure",
            startDate: "2024-01-01",
            endDate: "2024-01-15",
            status: "In Progress",
            progress: 40
        },
        {
            id: 2,
            name: "Sprint 2",
            goal: "Integrate task management features",
            startDate: "2024-01-16",
            endDate: "2024-01-31",
            status: "Not Started",
            progress: 0
        },
    ]);

    const addSprint = (newSprint) => {
        const sprintWithId = { id: sprints.length + 1, ...newSprint };
        setSprints((prevSprints) => [...prevSprints, sprintWithId]);
    };

    const editSprint = (updatedSprint) => {
        setSprints((prevSprints) =>
            prevSprints.map((sprint) =>
                sprint.id === updatedSprint.id ? updatedSprint : sprint
            )
        );
    };

    const deleteSprint = (sprintId) => {
        setSprints((prevSprints) => prevSprints.filter((sprint) => sprint.id !== sprintId));
    };

    const updateSprintProgress = (sprintId, progress) => {
        setSprints((prevSprints) =>
            prevSprints.map((sprint) =>
                sprint.id === sprintId ? { ...sprint, progress } : sprint
            )
        );
    };

    return (
        <SprintContext.Provider value={{ sprints, addSprint, editSprint, deleteSprint, updateSprintProgress }}>
            {children}
        </SprintContext.Provider>
    );
};
