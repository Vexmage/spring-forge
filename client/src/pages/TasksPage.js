// src/pages/TasksPage.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TasksPage() {
    const { tasks, loading } = useContext(TaskContext);

    return (
        <Container>
            <h2 className="my-4">Tasks</h2>
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                <Row>
                    {tasks.map((task) => (
                        <Col md={6} lg={4} key={task.id} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{task.title}</Card.Title>
                                    <Card.Text>{task.description}</Card.Text>
                                    <p><strong>Assignee:</strong> {task.assignee}</p>
                                    <p><strong>Status:</strong> {task.status}</p>
                                    <p><strong>Priority:</strong> {task.priority}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default TasksPage;
