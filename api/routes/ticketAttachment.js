const express = require('express');

const {
  getTicketAttachments,
  getSingleTicketAttachment,
  addTicketAttachment,
  updateTicketAttachment,
  deleteTicketAttachment,
} = require('../controllers/ticketAttachment');

const router = express.Router();

router.route('/').get(getTicketAttachments).post(addTicketAttachment);
router.route('/:id').get(getSingleTicketAttachment).put(updateTicketAttachment).delete(deleteTicketAttachment);

module.exports = router;
