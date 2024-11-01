// src/pages/MilestonesPage.js
import React, { useContext, useState } from 'react';
import { MilestoneContext } from '../context/MilestoneContext';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';

function MilestonesPage() {
    const { milestones, addMilestone, editMilestone, deleteMilestone } = useContext(MilestoneContext);
    const [newMilestone, setNewMilestone] = useState({ title: '', description: '', status: 'Not Started', targetDate: '' });
    const [selectedMilestone, setSelectedMilestone] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Handle input changes for new milestones
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMilestone((prevMilestone) => ({ ...prevMilestone, [name]: value }));
    };

    // Handle form submission for new milestones
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMilestone.title.trim()) {
            addMilestone(newMilestone);
            setNewMilestone({ title: '', description: '', status: 'Not Started', targetDate: '' });
        }
    };

    // Open edit modal and set the selected milestone
    const handleEditClick = (milestone) => {
        setSelectedMilestone(milestone);
        setShowModal(true);
    };

    // Handle changes in the edit modal
    const handleModalChange = (e) => {
        const { name, value } = e.target;
        setSelectedMilestone({ ...selectedMilestone, [name]: value });
    };

    // Save edited milestone changes
    const handleSaveChanges = () => {
        editMilestone(selectedMilestone);
        setShowModal(false);
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
                        <Form.Group controlId="milestoneDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="description"
                                value={newMilestone.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="milestoneStatus" className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={newMilestone.status}
                                onChange={handleChange}
                            >
                                <option>Not Started</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">Add Milestone</Button>
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
                                <p><strong>Target Date:</strong> {milestone.targetDate}</p>
                                <p><strong>Status:</strong> {milestone.status}</p>
                                <p>{milestone.description}</p>
                                <Button variant="outline-primary" onClick={() => handleEditClick(milestone)} className="me-2">Edit</Button>
                                <Button variant="outline-danger" onClick={() => deleteMilestone(milestone.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Edit Milestone Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Milestone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMilestone && (
                        <Form>
                            <Form.Group controlId="editMilestoneTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={selectedMilestone.title}
                                    onChange={handleModalChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="editMilestoneDescription" className="mt-2">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    value={selectedMilestone.description}
                                    onChange={handleModalChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="editMilestoneStatus" className="mt-2">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={selectedMilestone.status}
                                    onChange={handleModalChange}
                                >
                                    <option>Not Started</option>
                                    <option>In Progress</option>
                                    <option>Completed</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="editMilestoneTargetDate" className="mt-2">
                                <Form.Label>Target Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="targetDate"
                                    value={selectedMilestone.targetDate}
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

export default MilestonesPage;
