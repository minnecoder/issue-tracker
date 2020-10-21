const TicketHistory = require('../models/TicketHistory');

// @desc Get all ticketHistorys
// @route GET /ticketHistory
// @access All
exports.getTicketHistorys = async (req, res) => {
  try {
    const ticketHistorys = await TicketHistory.findAll();

    return res.status(200).json({
      success: true,
      count: ticketHistorys.length,
      data: ticketHistorys,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

//  @desc get single ticketHistory by id
// @route GET /ticketHistory/:id
// @access All
exports.getSingleTicketHistory = async (req, res) => {
  try {
    const ticketHistory = await TicketHistory.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: ticketHistory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Add ticketHistory
// @route POST /ticketHistory
// @access verified user
exports.addTicketHistory = async (req, res) => {
  try {
    const ticketHistory = await TicketHistory.create(req.body);

    return res.status(200).json({
      success: true,
      data: ticketHistory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update ticketHistory
// @route UPDATE /ticketHistory/:id
// @access Verfied User
exports.updateTicketHistory = async (req, res) => {
  try {
    const ticketHistory = await TicketHistory.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!ticketHistory) {
      return res.status(404).json({
        success: false,
        error: 'Ticket history not found',
      });
    }

    await TicketHistory.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: ticketHistory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete ticketHistory
// @route DELETE /ticketHistory/:id
// @access Verified User
exports.deleteTicketHistory = async (req, res) => {
  try {
    const ticketHistory = await TicketHistory.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!ticketHistory) {
      return res.status(400).json({
        success: false,
        error: 'Ticket history not found',
      });
    }
    await TicketHistory.destory({
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
