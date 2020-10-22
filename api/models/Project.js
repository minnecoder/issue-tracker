const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Project;
