// server/models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'To Do',
    },
    priority: {
        type: DataTypes.STRING,
        defaultValue: 'Medium',
    },
    assignee: {
        type: DataTypes.STRING,
    },
});

module.exports = Task;
