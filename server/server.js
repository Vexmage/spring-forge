// server/server.js
const express = require('express');
const initDb = require('./initDb');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const User = require('./models/User'); // Import User model

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Seed an admin user if one doesn't exist
async function seedAdminUser() {
    const adminEmail = "admin@example.com";
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });
    
    if (!existingAdmin) {
        await User.create({
            name: "Admin User",
            email: adminEmail,
            role: "Admin",
        });
        console.log("Admin user created successfully.");
    } else {
        console.log("Admin user already exists.");
    }
}

// Initialize the database and start the server
initDb().then(async () => {
    await seedAdminUser(); // Call seed function on startup
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to initialize database:", error);
});
