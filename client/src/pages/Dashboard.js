// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

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
        <div className="dashboard container">
            <h2 className="my-4">Welcome to Your Project Dashboard</h2>
            <p>Here’s an overview of your project progress and upcoming tasks.</p>

            <Row className="mb-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Message from Sparky</Card.Title>
                            <Card.Text>
                                "Remember, a well-organized project is a successful project! Let’s keep things on track!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Task Overview</Card.Title>
                            {loading ? (
                                <p>Loading tasks...</p>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">To Do: {taskSummary['To Do']}</li>
                                    <li className="list-group-item">In Progress: {taskSummary['In Progress']}</li>
                                    <li className="list-group-item">Completed: {taskSummary['Completed']}</li>
                                </ul>
                            )}
                            <Link to="/tasks">
                                <Button variant="primary" className="mt-3">View All Tasks</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Current Sprint Progress</Card.Title>
                            <p>Sprint Goal: Complete foundational setup and initial UI components.</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "60%" }}
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    60%
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Upcoming Milestones</Card.Title>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Alpha Release - Target: Jan 15, 2024</li>
                                <li className="list-group-item">Beta Release - Target: Feb 15, 2024</li>
                                <li className="list-group-item">Launch - Target: Mar 1, 2024</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
