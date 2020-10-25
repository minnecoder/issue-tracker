const express = require('express');
const { verifyTicketComment } = require('../middleware/verifyIDs');
const {
  getTicketComments,
  getSingleTicketComment,
  addTicketComment,
  updateTicketComment,
  deleteTicketComment,
} = require('../controllers/ticketComment');

const router = express.Router();

router
  .route('/')
  .get(getTicketComments)
  .post(addTicketComment);

router
  .route('/:id')
  .get(getSingleTicketComment)
  .put(
    verifyTicketComment,
    updateTicketComment,
  )
  .delete(
    verifyTicketComment,
    deleteTicketComment,
  );

module.exports = router;
