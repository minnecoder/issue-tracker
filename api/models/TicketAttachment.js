const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Ticket = require('./Ticket');
const User = require('./User');

const TicketAttachment = db.define('ticketAttachments', {
  ticketId: {
    type: Sequelize.INTEGER,
    references: {
      model: Ticket,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  fileName: {
    type: Sequelize.STRING,
  },
  uploader: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  notes: {
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

// Ticket.hasMany(TicketAttachment);
// TicketAttachment.belongsTo(Ticket);
// User.hasMany(TicketAttachment);
// TicketAttachment.belongsTo(User);

module.exports = TicketAttachment;
