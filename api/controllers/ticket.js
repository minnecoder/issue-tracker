const Ticket = require('../models/Ticket');

// @desc Get all tickets
// @route GET /ticket
// @access All
exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();

    return res.status(200).json({
      success: true,
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

//  @desc get single ticket by id
// @route GET /ticket/:id
// @access All
exports.getSingleTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Add ticket
// @route POST /ticket
// @access verified user
exports.addTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);

    return res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update ticket
// @route UPDATE /ticket/:id
// @access Verfied User
exports.updateTicket = async (req, res) => {
  try {
    await Ticket.update(req.body, {
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

// @desc Delete ticket
// @route DELETE /ticket/:id
// @access Verified User
exports.deleteTicket = async (req, res) => {
  try {
    await Ticket.destory({
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
