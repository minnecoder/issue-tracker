const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Ticket = require('./Ticket');

const TicketHistory = db.define('ticket_history',
  {
    ticket_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Ticket,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    property_changed: {
      type: Sequelize.STRING,
    },
    old_value: {
      type: Sequelize.STRING,
    },
    new_value: {
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
