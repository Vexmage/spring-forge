// src/pages/ProfilePage.js
import React, { useContext, useState } from 'react';
import { MascotContext } from '../context/MascotContext';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

function ProfilePage() {
    const { customization, updateCustomization } = useContext(MascotContext);

    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
    });

    const [mascotSettings, setMascotSettings] = useState(customization);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleMascotChange = (e) => {
        const { name, value } = e.target;
        setMascotSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
    };

    const saveProfile = () => {
        console.log("Profile saved:", profile);
    };

    const saveMascotCustomization = () => {
        updateCustomization(mascotSettings);
    };

    return (
        <div>
            <h2>Profile & Mascot Customization</h2>
            <p>Update your profile information and customize Sparky here.</p>

            <Row className="mb-4">
                <Col md={6}>
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
                                <Button variant="primary" onClick={saveProfile}>Save Profile</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
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
            </Row>
        </div>
    );
}

export default ProfilePage;
