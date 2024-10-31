// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

function Dashboard() {
    const { tasks, loading } = useContext(TaskContext);

    // Calculate task summary
    const taskSummary = tasks.reduce(
        (summary, task) => {
            summary[task.status] = (summary[task.status] || 0) + 1;
            return summary;
        },
        { 'To Do': 0, 'In Progress': 0, 'Completed': 0 }
    );

    return (
        <div className="dashboard">
            <h2>Welcome to Your Project Dashboard</h2>
            <p>Here’s an overview of your project progress and upcoming tasks.</p>

            {/* Task Overview */}
            <section className="dashboard-section task-overview">
                <h3>Task Overview</h3>
                {loading ? (
                    <p>Loading tasks...</p>
                ) : (
                    <ul>
                        <li>To Do: {taskSummary['To Do']}</li>
                        <li>In Progress: {taskSummary['In Progress']}</li>
                        <li>Completed: {taskSummary['Completed']}</li>
                    </ul>
                )}
                {/* Link to Tasks Page */}
                <Link to="/tasks" className="view-tasks-button">
                    View All Tasks
                </Link>
            </section>
        </div>
    );
}

export default Dashboard;
