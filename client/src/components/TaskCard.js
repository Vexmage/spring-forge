// src/components/TaskCard.js
import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';

function TaskCard({ title, description, assignee, status, priority, sprintId, onEdit, onDelete, onStatusChange, onAssignSprint, sprints }) {
    return (
        <Card className="task-card mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <p><strong>Assignee:</strong> {assignee}</p>
                <p><strong>Status:</strong> {status}</p>
                <p><strong>Priority:</strong> {priority}</p>

                <Dropdown onSelect={(sprintId) => onAssignSprint(Number(sprintId))} className="mt-2">
                    <Dropdown.Toggle variant="secondary">
                        {sprintId ? `Sprint ${sprintId}` : 'Assign to Sprint'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {sprints.map((sprint) => (
                            <Dropdown.Item key={sprint.id} eventKey={sprint.id}>
                                {sprint.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Button variant="outline-primary" onClick={onEdit} className="me-2">Edit</Button>
                <Button variant="outline-danger" onClick={onDelete}>Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default TaskCard;
