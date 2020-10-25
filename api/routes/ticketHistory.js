const express = require('express');
const { verifyTicketHistory } = require('../middleware/verifyIDs');
const {
  getTicketHistorys,
  getSingleTicketHistory,
  addTicketHistory,
  updateTicketHistory,
  deleteTicketHistory,
} = require('../controllers/ticketHistory');

const router = express.Router();

router
  .route('/')
  .get(getTicketHistorys)
  .post(addTicketHistory);

router
  .route('/:id')
  .get(getSingleTicketHistory)
  .put(
    verifyTicketHistory,
    updateTicketHistory,
  )
  .delete(
    verifyTicketHistory,
    deleteTicketHistory,
  );

module.exports = router;
