const express = require('express');
const { verifyTicketAttachment } = require('../middleware/verifyIDs');
const {
  getTicketAttachments,
  getSingleTicketAttachment,
  addTicketAttachment,
  updateTicketAttachment,
  deleteTicketAttachment,
} = require('../controllers/ticketAttachment');

const router = express.Router();

router
  .route('/')
  .get(getTicketAttachments)
  .post(addTicketAttachment);

router
  .route('/:id')
  .get(getSingleTicketAttachment)
  .put(
    verifyTicketAttachment,
    updateTicketAttachment,
  )
  .delete(
    verifyTicketAttachment,
    deleteTicketAttachment,
  );

module.exports = router;
