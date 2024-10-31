// src/pages/SprintsPage.js
import React, { useContext, useState } from 'react';
import { SprintContext } from '../context/SprintContext';
import { Container, Row, Col, Card, Form, Button, ProgressBar } from 'react-bootstrap';

function SprintsPage() {
    const { sprints, addSprint } = useContext(SprintContext);
    const [newSprint, setNewSprint] = useState({
        name: '',
        goal: '',
        startDate: '',
        endDate: '',
        progress: 0,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSprint((prevSprint) => ({ ...prevSprint, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newSprint.name.trim() && newSprint.goal.trim()) {
            addSprint(newSprint);
            setNewSprint({ name: '', goal: '', startDate: '', endDate: '', progress: 0 });
        }
    };

    return (
        <Container>
            <h2 className="my-4">Sprints</h2>

            {/* Sprint Creation Form */}
            <Card className="mb-4">
                <Card.Body>
                    <h5>Add a New Sprint</h5>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="sprintName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={newSprint.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="sprintGoal">
                                    <Form.Label>Goal</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="goal"
                                        value={newSprint.goal}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="sprintStartDate">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="startDate"
                                        value={newSprint.startDate}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="sprintEndDate">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="endDate"
                                        value={newSprint.endDate}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Add Sprint
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            {/* Sprint List */}
            <Row>
                {sprints.map((sprint) => (
                    <Col md={6} lg={4} key={sprint.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{sprint.name}</Card.Title>
                                <Card.Text>{sprint.goal}</Card.Text>
                                <p><strong>Start Date:</strong> {sprint.startDate}</p>
                                <p><strong>End Date:</strong> {sprint.endDate}</p>
                                <ProgressBar now={sprint.progress} label={`${sprint.progress}%`} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SprintsPage;
