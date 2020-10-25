const TicketComment = require('../models/TicketComment');

// @desc Get all ticketComments
// @route GET /ticketComment
// @access All
exports.getTicketComments = async (req, res) => {
  try {
    const ticketComments = await TicketComment.findAll();

    return res.status(200).json({
      success: true,
      count: ticketComments.length,
      data: ticketComments,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

//  @desc get single ticketComment by id
// @route GET /ticketComment/:id
// @access All
exports.getSingleTicketComment = async (req, res) => {
  try {
    const ticketComment = await TicketComment.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: ticketComment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Add ticketComment
// @route POST /ticketComment
// @access verified user
exports.addTicketComment = async (req, res) => {
  try {
    const ticketComment = await TicketComment.create(req.body);

    return res.status(200).json({
      success: true,
      data: ticketComment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update ticketComment
// @route UPDATE /ticketComment/:id
// @access Verfied User
exports.updateTicketComment = async (req, res) => {
  try {
    await TicketComment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: ticketComment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete ticketComment
// @route DELETE /ticketComment/:id
// @access Verified User
exports.deleteTicketComment = async (req, res) => {
  try {
    await TicketComment.destory({
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
