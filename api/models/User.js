const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.TEXT,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = User;
