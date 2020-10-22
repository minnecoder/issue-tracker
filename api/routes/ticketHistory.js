const express = require('express');

const {
  getTicketHistorys,
  getSingleTicketHistory,
  addTicketHistory,
  updateTicketHistory,
  deleteTicketHistory,
} = require('../controllers/ticketHistory');

const router = express.Router();

router.route('/').get(getTicketHistorys).post(addTicketHistory);
router.route('/:id').get(getSingleTicketHistory).put(updateTicketHistory).delete(deleteTicketHistory);

module.exports = router;
