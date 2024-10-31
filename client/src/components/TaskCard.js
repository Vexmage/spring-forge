// src/components/TaskCard.js
import React from 'react';

function TaskCard({ title, description, assignee, status, priority }) {
    return (
        <div className="task-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Assignee:</strong> {assignee}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Priority:</strong> {priority}</p>
        </div>
    );
}

export default TaskCard;
