const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Project = require('./Project.js');
const User = require('./User');

const Ticket = db.define('ticket', {
  project_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Project,
      key: 'id',
      defferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  assigned_dev: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  submitter: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  ticket_priority: {
    type: Sequelize.ENUM('lowest', 'low', 'medium', 'high', 'highest'),
  },
  ticket_status: {
    type: Sequelize.ENUM('open', 'resolved', 'closed', 'reopened', 'in progress'),
  },
  ticket_type: {
    type: Sequelize.ENUM('bug', 'new feature', 'improvement', 'task', 'testing'),
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
});

Project.hasMany(Ticket);
Ticket.belongsTo(Project);
User.hasMany(Ticket);
Ticket.belongsTo(User);

module.exports = Ticket;
