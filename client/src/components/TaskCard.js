// src/components/TaskCard.js
import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';

function TaskCard({ title, description, assignee, status, priority, onEdit, onDelete, onStatusChange }) {
    return (
        <Card className="task-card mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p><strong>Assignee:</strong> {assignee}</p>
                <p><strong>Status:</strong> {status}</p>
                <p><strong>Priority:</strong> {priority}</p>
                <Button variant="outline-primary" onClick={onEdit} className="me-2">Edit</Button>
                <Button variant="outline-danger" onClick={onDelete}>Delete</Button>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle variant="secondary">Change Status</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => onStatusChange('To Do')}>To Do</Dropdown.Item>
                        <Dropdown.Item onClick={() => onStatusChange('In Progress')}>In Progress</Dropdown.Item>
                        <Dropdown.Item onClick={() => onStatusChange('Completed')}>Completed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
        </Card>
    );
}

export default TaskCard;
