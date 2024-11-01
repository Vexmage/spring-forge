// server/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // or another path for the SQLite file
});

module.exports = sequelize;
