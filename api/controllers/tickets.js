const Ticket = require("../models/Ticket")

// TODO make controller to return ticket with ticketHistory and ticketComment
// TODO Need add Ticket to return list of projects (ids and project titles)

// @ desc Get all tickets
// @route GET /tickets
// @access Public
exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({})
            .populate("ticketComment ticketHistory")
            .exec()

        res.status(200).json({
            success: true,
            count: tickets.length,
            data: tickets
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @ desc Get single ticket
// @route GET /tickets/:id
// @access Public
exports.getSingleTicket = async (req, res) => {
    console.log(req.params)
    try {
        const ticket = await Ticket.findOne({ _id: req.params.id })
        await ticket.populate("ticketHistory").execPopulate()
        // .populate("ticketComment ticketHistory")
        // .exec()

        res.status(200).json({
            success: true,
            // count: tickets.length,
            data: ticket
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @desc  Add ticket
// @route POST /tickets
// @access Public
exports.addTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body);
        return res.status(200).json({
            success: true,
            data: ticket,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Update ticket
// @route PUT /tickets/:id
// @access
exports.updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).exec();
        ticket.set(req.body);
        await ticket.save();
        return res.status(200).json({
            success: true,
            data: ticket,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Delete ticket
// @route DELETE /tickets/:id
// @access
exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) {
            return res.status(404).json({
                success: false,
                error: "No ticket found",
            });
        }
        await ticket.remove();

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server Error" });
    }
};

// @desc Add ticketComment to ticket
// @route PUT /tickets/comment
// @access
exports.addTicketCommentToTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.body.id)
        if (!ticket) {
            return res.status(404).json({
                success: false,
                error: "Ticket not found"
            })
        }

        ticket.ticketComment.push(req.body._id)
        await ticket.save()
        return res.status(200).json({
            success: true,
            data: ticket
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}

// @desc Add ticketHistory to ticket
// @route PUT /tickets/history
// @access
exports.addTicketHistoryToTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.body.id)
        if (!ticket) {
            return res.status(404).json({
                success: false,
                error: "Ticket not found"
            })
        }

        ticket.ticketHistory.push(req.body._id)
        await ticket.save()
        return res.status(200).json({
            success: true,
            data: ticket
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: "Server Error" })
    }
}