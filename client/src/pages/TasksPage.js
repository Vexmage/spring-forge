// src/pages/TasksPage.js
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function TasksPage() {
    const { tasks, loading, addTask } = useContext(TaskContext);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        assignee: '',
        status: 'To Do',
        priority: 'Medium'
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.title.trim()) {
            addTask(newTask);
            setNewTask({ title: '', description: '', assignee: '', status: 'To Do', priority: 'Medium' });
        }
    };

    return (
        <Container>
            <h2 className="my-4">Tasks</h2>

            {/* Task Creation Form */}
            <Card className="mb-4">
                <Card.Body>
                    <h5>Add a New Task</h5>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="taskTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={newTask.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="taskAssignee">
                                    <Form.Label>Assignee</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="assignee"
                                        value={newTask.assignee}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="taskDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="description"
                                value={newTask.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="taskStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select
                                        name="status"
                                        value={newTask.status}
                                        onChange={handleChange}
                                    >
                                        <option>To Do</option>
                                        <option>In Progress</option>
                                        <option>Completed</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="taskPriority">
                                    <Form.Label>Priority</Form.Label>
                                    <Form.Select
                                        name="priority"
                                        value={newTask.priority}
                                        onChange={handleChange}
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Add Task
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            {/* Task List */}
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                <Row>
                    {tasks.map((task) => (
                        <Col md={6} lg={4} key={task.id} className="mb-4">
                            <TaskCard
                                title={task.title}
                                description={task.description}
                                assignee={task.assignee}
                                status={task.status}
                                priority={task.priority}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default TasksPage;
