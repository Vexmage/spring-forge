// src/pages/TasksPage.js
import React from 'react';
import TaskCard from '../components/TaskCard';

function TasksPage() {
    return (
        <div>
            <h2>Tasks</h2>
            <p>Manage and assign tasks to your team here.</p>
            <TaskCard title="Sample Task" description="Complete the UI design for the homepage." assignee="Jane Doe" status="To Do" priority="High" />
            <TaskCard title="Backend Setup" description="Initialize the database and configure API endpoints." assignee="John Smith" status="In Progress" priority="Medium" />
        </div>
    );
}

export default TasksPage;
