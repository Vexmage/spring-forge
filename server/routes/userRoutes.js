// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Temporary route to create an admin user
router.post('/create-admin', async (req, res) => {
    try {
        // Example check to ensure this endpoint isn't widely accessible
        const adminPassword = "supersecretpassword"; // Replace with an environment variable or strong password
        if (req.body.password !== adminPassword) {
            return res.status(403).json({ error: "Unauthorized" });
        }

        const { name, email } = req.body;
        const role = "Admin"; // Explicitly setting admin role
        const adminUser = await User.create({ name, email, role });
        res.json(adminUser);
    } catch (error) {
        console.error("Error creating admin user:", error);
        res.status(500).json({ error: "Failed to create admin user" });
    }
});

module.exports = router;
