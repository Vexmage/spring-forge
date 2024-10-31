// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="sidebar">
            <Link to="/tasks">Tasks</Link>
            <Link to="/sprints">Sprints</Link>
            <Link to="/milestones">Milestones</Link>
        </aside>
    );
}

export default Sidebar;
