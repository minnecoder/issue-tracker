const TicketAttachment = require('../models/TicketAttachment');

// @desc Get all ticketAttachments
// @route GET /ticketAttachment
// @access All
exports.getTicketAttachments = async (req, res) => {
  try {
    const ticketAttachments = await TicketAttachment.findAll();

    return res.status(200).json({
      success: true,
      count: ticketAttachments.length,
      data: ticketAttachments,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

//  @desc get single ticketAttachment by id
// @route GET /ticketAttachment/:id
// @access All
exports.getSingleTicketAttachment = async (req, res) => {
  try {
    const ticketAttachment = await TicketAttachment.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: ticketAttachment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Add ticketAttachment
// @route POST /ticketAttachment
// @access verified user
exports.addTicketAttachment = async (req, res) => {
  try {
    const ticketAttachment = await TicketAttachment.create(req.body);

    return res.status(200).json({
      success: true,
      data: ticketAttachment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update ticketAttachment
// @route UPDATE /ticketAttachment/:id
// @access Verfied User
exports.updateTicketAttachment = async (req, res) => {
  try {
    await TicketAttachment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete ticketAttachment
// @route DELETE /ticketAttachment/:id
// @access Verified User
exports.deleteTicketAttachment = async (req, res) => {
  try {
    await TicketAttachment.destory({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};
