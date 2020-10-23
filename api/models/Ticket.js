const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Project = require('./Project.js');
const User = require('./User');

const Ticket = db.define('tickets', {
  projectId: {
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
  assignedDev: {
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
  ticketPriority: {
    type: Sequelize.ENUM('lowest', 'low', 'medium', 'high', 'highest'),
  },
  ticketStatus: {
    type: Sequelize.ENUM('open', 'resolved', 'closed', 'reopened', 'in progress'),
  },
  ticketType: {
    type: Sequelize.ENUM('bug', 'new feature', 'improvement', 'task', 'testing'),
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  updatedAt: {
    type: Sequelize.DATE,
    
  },
});

// Project.hasMany(Ticket);
// Ticket.belongsTo(Project);
// User.hasMany(Ticket);
// Ticket.belongsTo(User);

module.exports = Ticket;
