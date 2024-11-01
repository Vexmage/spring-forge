// src/pages/ProfilePage.js
import React, { useContext, useState } from 'react';
import { MascotContext } from '../context/MascotContext';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import UserList from '../components/UserList';

function ProfilePage() {
    const { customization, updateCustomization } = useContext(MascotContext);

    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Developer"
    });

    const [preferences, setPreferences] = useState({
        defaultView: "Dashboard",
        notifications: {
            taskAssignments: true,
            projectUpdates: true,
            messages: true
        }
    });

    const [mascotSettings, setMascotSettings] = useState(customization);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handlePreferenceChange = (e) => {
        const { name, value } = e.target;
        setPreferences((prevPreferences) => ({ ...prevPreferences, [name]: value }));
    };

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            notifications: { ...prevPreferences.notifications, [name]: checked }
        }));
    };

    const handleMascotChange = (e) => {
        const { name, value } = e.target;
        setMascotSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
    };

    const saveProfile = () => {
        console.log("Profile saved:", profile);
    };

    const savePreferences = () => {
        console.log("Preferences saved:", preferences);
    };

    const saveMascotCustomization = () => {
        updateCustomization(mascotSettings);
    };

    const createAdminUser = () => {
        axiosInstance.post('/users/create-admin', {
            name: "Admin User",
            email: "admin@example.com",
            password: "supersecretpassword"
        })
        .then(response => {
            console.log("Admin created:", response.data);
        })
        .catch(error => {
            console.error("Error creating admin:", error);
        });
    };

    return (
        <div>
            <h2>Profile & Settings</h2>
            <p>Update your profile information, app preferences, and customize Sparky here.</p>

            <Row className="mb-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3>Account Information</h3>
                            <Form>
                                <Form.Group controlId="profileName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleProfileChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="profileEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleProfileChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId="profileRole" className="mb-3">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="role"
                                        value={profile.role}
                                        onChange={handleProfileChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={saveProfile}>Save Profile</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3>App Preferences</h3>
                            <Form>
                                <Form.Group controlId="defaultView" className="mb-3">
                                    <Form.Label>Default View</Form.Label>
                                    <Form.Select
                                        name="defaultView"
                                        value={preferences.defaultView}
                                        onChange={handlePreferenceChange}
                                    >
                                        <option>Dashboard</option>
                                        <option>Tasks</option>
                                        <option>Sprints</option>
                                        <option>Milestones</option>
                                    </Form.Select>
                                </Form.Group>

                                <h5>Notifications</h5>
                                <Form.Check
                                    type="checkbox"
                                    label="Task Assignments"
                                    name="taskAssignments"
                                    checked={preferences.notifications.taskAssignments}
                                    onChange={handleNotificationChange}
                                    className="mb-2"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Project Updates"
                                    name="projectUpdates"
                                    checked={preferences.notifications.projectUpdates}
                                    onChange={handleNotificationChange}
                                    className="mb-2"
                                />
                                <Form.Check
                                    type="checkbox"
                                    label="Messages"
                                    name="messages"
                                    checked={preferences.notifications.messages}
                                    onChange={handleNotificationChange}
                                    className="mb-2"
                                />
                                <Button variant="primary" onClick={savePreferences}>Save Preferences</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <h3>Customize Sparky</h3>
                            <Form>
                                <Form.Group controlId="mascotColor" className="mb-3">
                                    <Form.Label>Fur Color</Form.Label>
                                    <Form.Select
                                        name="color"
                                        value={mascotSettings.color || ""}
                                        onChange={handleMascotChange}
                                    >
                                        <option>Brown</option>
                                        <option>Gray</option>
                                        <option>White</option>
                                        <option>Black</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="mascotClothing" className="mb-3">
                                    <Form.Label>Outfit</Form.Label>
                                    <Form.Select
                                        name="clothing"
                                        value={mascotSettings.clothing || ""}
                                        onChange={handleMascotChange}
                                    >
                                        <option>Knight Armor</option>
                                        <option>Wizard Robes</option>
                                        <option>Rogue Attire</option>
                                        <option>Monk Robes</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="mascotAccessory" className="mb-3">
                                    <Form.Label>Accessory</Form.Label>
                                    <Form.Select
                                        name="accessory"
                                        value={mascotSettings.accessory || ""}
                                        onChange={handleMascotChange}
                                    >
                                        <option>Magic Staff</option>
                                        <option>Shield</option>
                                        <option>Amulet</option>
                                        <option>None</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="mascotPersonality" className="mb-3">
                                    <Form.Label>Personality</Form.Label>
                                    <Form.Select
                                        name="personality"
                                        value={mascotSettings.personality || ""}
                                        onChange={handleMascotChange}
                                    >
                                        <option>Wise</option>
                                        <option>Playful</option>
                                        <option>Brave</option>
                                        <option>Mystical</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant="primary" onClick={saveMascotCustomization}>
                                    Save Mascot Customization
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mt-4">
                    <Card>
                        <Card.Body>
                            <h3>User List</h3>
                            <UserList /> {/* Render UserList component */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProfilePage;
