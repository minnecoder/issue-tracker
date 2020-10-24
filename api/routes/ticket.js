const express = require('express');

const {
  verifyAssignedDev,
  verifySubmitter,
  verifyProjectId,
  verifyTicketId,
} = require('../middleware/verifyIDs');

const {
  getTickets,
  getSingleTicket,
  addTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticket');

const router = express.Router();

router
  .route('/')
  .get(getTickets)
  .post(
    verifyProjectId,
    verifyAssignedDev,
    verifySubmitter,
    addTicket,
  );

router
  .route('/:id')
  .get(getSingleTicket)
  .put(
    verifyTicketId,
    verifyProjectId,
    verifyAssignedDev,
    verifySubmitter,
    updateTicket,
  )
  .delete(
    verifyTicketId,
    deleteTicket,
  );

module.exports = router;
