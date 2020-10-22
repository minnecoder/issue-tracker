const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Ticket = require('./Ticket');

const TicketHistory = db.define('ticketHistory',
  {
    ticketId: {
      type: Sequelize.INTEGER,
      references: {
        model: Ticket,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    propertyChanged: {
      type: Sequelize.STRING,
    },
    oldValue: {
      type: Sequelize.STRING,
    },
    newValue: {
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

Ticket.hasMany(TicketHistory);
TicketHistory.belongsTo(Ticket);

module.exports = TicketHistory;
