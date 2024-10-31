// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar p-3">
            <h5 className="sidebar-title">Project Navigation</h5>
            <ListGroup variant="flush">
                <ListGroup.Item as={Link} to="/tasks" action>
                    Tasks
                </ListGroup.Item>
                <ListGroup.Item as={Link} to="/sprints" action>
                    Sprints
                </ListGroup.Item>
                <ListGroup.Item as={Link} to="/milestones" action>
                    Milestones
                </ListGroup.Item>
            </ListGroup>
        </aside>
    );
}

export default Sidebar;
