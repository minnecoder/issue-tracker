const express = require("express")

const {
    getTickets,
    addTicket,
    updateTicket,
    deleteTicket
} = require("../controllers/tickets")

const router = express.Router()

router
    .route("/")
    .get(getTickets)
    .post(addTicket)

router
    .route("/:id")
    .put(updateTicket)
    .delete(deleteTicket)

module.exports = router;