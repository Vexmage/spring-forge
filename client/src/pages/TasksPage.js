// src/pages/TasksPage.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

function TasksPage() {
    const { tasks, loading } = useContext(TaskContext);

    return (
        <div>
            <h2>Tasks</h2>
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        assignee={task.assignee}
                        status={task.status}
                        priority={task.priority}
                    />
                ))
            )}
        </div>
    );
}

export default TasksPage;
