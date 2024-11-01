// src/pages/SprintsPage.js
import React, { useContext, useState } from 'react';
import { SprintContext } from '../context/SprintContext';
import { TaskContext } from '../context/TaskContext';
import { Container, Row, Col, Card, Button, Modal, Form, ProgressBar } from 'react-bootstrap';

function SprintsPage() {
    const { sprints, addSprint, editSprint, deleteSprint } = useContext(SprintContext);
    const { tasks } = useContext(TaskContext);
    const [newSprint, setNewSprint] = useState({ name: '', goal: '', startDate: '', endDate: '', status: 'Not Started', progress: 0 });
    const [selectedSprint, setSelectedSprint] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Calculate the progress of each sprint based on task completion
    const calculateProgress = (sprintId) => {
        const sprintTasks = tasks.filter(task => task.sprintId === sprintId);
        const completedTasks = sprintTasks.filter(task => task.status === "Completed").length;
        return sprintTasks.length ? (completedTasks / sprintTasks.length) * 100 : 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSprint((prevSprint) => ({ ...prevSprint, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addSprint(newSprint);
        setNewSprint({ name: '', goal: '', startDate: '', endDate: '', status: 'Not Started', progress: 0 });
    };

    const handleEditClick = (sprint) => {
        setSelectedSprint(sprint);
        setShowModal(true);
    };

    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setSelectedSprint({ ...selectedSprint, [name]: value });
    };

    const handleSaveChanges = () => {
        editSprint(selectedSprint);
        setShowModal(false);
    };

    return (
        <Container>
            <h2 className="my-4">Sprints</h2>

            {/* Sprint Creation Form */}
            <Card className="mb-4">
                <Card.Body>
                    <h5>Create a New Sprint</h5>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="sprintName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={newSprint.name}
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">Add Sprint</Button>
                    </Form>
                </Card.Body>
            </Card>

            {/* Sprint List */}
            <Row>
                {sprints.map((sprint) => {
                    const sprintTasks = tasks.filter(task => task.sprintId === sprint.id);
                    const progress = calculateProgress(sprint.id);

                    return (
                        <Col md={6} lg={4} key={sprint.id} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{sprint.name}</Card.Title>
                                    <p><strong>Goal:</strong> {sprint.goal}</p>
                                    <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-3" />

                                    <h6>Tasks in this Sprint</h6>
                                    <ul>
                                        {sprintTasks.length > 0 ? (
                                            sprintTasks.map((task) => (
                                                <li key={task.id}>{task.title} - {task.status}</li>
                                            ))
                                        ) : (
                                            <li>No tasks assigned</li>
                                        )}
                                    </ul>

                                    <Button variant="outline-primary" onClick={() => handleEditClick(sprint)} className="me-2">Edit</Button>
                                    <Button variant="outline-danger" onClick={() => deleteSprint(sprint.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            {/* Edit Sprint Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Sprint</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedSprint && (
                        <Form>
                            <Form.Group controlId="editSprintName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={selectedSprint.name}
                                    onChange={handleModalChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="editSprintGoal" className="mt-2">
                                <Form.Label>Goal</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="goal"
                                    value={selectedSprint.goal}
                                    onChange={handleModalChange}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default SprintsPage;
