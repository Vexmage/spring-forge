// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Dashboard</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/sprints">Sprints</Link>
            <Link to="/milestones">Milestones</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
}

export default Navbar;
