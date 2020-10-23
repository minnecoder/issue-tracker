const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Ticket = require('./Ticket');
const User = require('./User');

const TicketComment = db.define('ticketComments', {
  ticketId: {
    type: Sequelize.INTEGER,
    references: {
      model: Ticket,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  commenter: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  comment: {
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

// Ticket.hasMany(TicketComment);
// TicketComment.belongsTo(Ticket);
// User.hasMany(TicketComment);
// TicketComment.belongsTo(User);

module.exports = TicketComment;
