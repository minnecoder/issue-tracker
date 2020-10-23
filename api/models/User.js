const Sequelize = require('sequelize');
const db = require('../config/postgres-db');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  // fullName: {
  //   type: Sequelize.VIRTUAL,
  //   get() {
  //     return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
  //   },
  // },
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
