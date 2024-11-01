// server/initDb.js
const sequelize = require('./db');
const User = require('./models/User');
const Task = require('./models/Task');

const initDb = async () => {
    await sequelize.sync({ alter: true }); // Syncs models to database
    console.log("Database initialized");
};

module.exports = initDb;
