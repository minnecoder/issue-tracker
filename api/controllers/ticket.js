const Ticket = require('../models/Ticket');
const TicketComment = require('../models/TicketComment');
const TicketHistory = require('../models/TicketHistory');
const TicketAttachment = require('../models/TicketAttachment');
const User = require('../models/User');

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

// @desc Get ticket all tickets with info, ticket comments, ticket changes, and ticket attachments
// @route GET /ticket/full
// @access Verified User
exports.getFullTicketInfo = async (req, res) => {
  try {
    // Get all tickets
    const tickets = await Ticket.findAll({
      // include: TicketComment,
      include: [

        {
          model: TicketComment,
          attributes: ['userId', 'comment', 'createdAt'],
          include: {
            model: User,
            attributes: ['fullName', 'firstName', 'lastName'],
          },
        },
        {
          model: TicketHistory,
          attributes: ['userId', 'propertyChanged', 'oldValue', 'newValue', 'createdAt'],
          include: {
            model: User,
            attributes: ['fullName', 'firstName', 'lastName'],
          },
        },
        {
          model: TicketAttachment,
          attributes: ['userId', 'fileName', 'notes', 'uploader', 'createdAt'],
          include: {
            model: User,
            attributes: ['fullName', 'firstName', 'lastName'],
          },

        },
      ],
    });
    return res.status(200).json({
      success: true,
      data: tickets,
    });
    // Get all ticket comments, ticket history, and ticket attachments
    // Put ticket and other ticket parts in the same object
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};
