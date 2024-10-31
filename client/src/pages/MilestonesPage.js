// src/pages/MilestonesPage.js
import React, { useContext, useState } from 'react';
import { MilestoneContext } from '../context/MilestoneContext';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function MilestonesPage() {
    const { milestones, addMilestone } = useContext(MilestoneContext);
    const [newMilestone, setNewMilestone] = useState({
        title: '',
        goal: '',
        status: 'Planned',
        startDate: '',
        targetDate: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMilestone((prevMilestone) => ({ ...prevMilestone, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMilestone.title.trim() && newMilestone.goal.trim()) {
            addMilestone(newMilestone);
            setNewMilestone({ title: '', goal: '', status: 'Planned', startDate: '', targetDate: '' });
        }
    };

    return (
        <Container>
            <h2 className="my-4">Milestones</h2>

            {/* Milestone Creation Form */}
            <Card className="mb-4">
                <Card.Body>
                    <h5>Add a New Milestone</h5>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="milestoneTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={newMilestone.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="milestoneGoal">
                                    <Form.Label>Goal</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="goal"
                                        value={newMilestone.goal}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Group controlId="milestoneStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select
                                        name="status"
                                        value={newMilestone.status}
                                        onChange={handleChange}
                                    >
                                        <option>Planned</option>
                                        <option>In Progress</option>
                                        <option>Completed</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="milestoneStartDate">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="startDate"
                                        value={newMilestone.startDate}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="milestoneTargetDate">
                                    <Form.Label>Target Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="targetDate"
                                        value={newMilestone.targetDate}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Add Milestone
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            {/* Milestone List */}
            <Row>
                {milestones.map((milestone) => (
                    <Col md={6} lg={4} key={milestone.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{milestone.title}</Card.Title>
                                <Card.Text>{milestone.goal}</Card.Text>
                                <p><strong>Status:</strong> {milestone.status}</p>
                                <p><strong>Start Date:</strong> {milestone.startDate}</p>
                                <p><strong>Target Date:</strong> {milestone.targetDate}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MilestonesPage;
