const express = require("express")


const {
    getProjects,
    addProject,
    updateProject,
    deleteProject,
    addTicketId
} = require("../controllers/projects")

const router = express.Router()

router
    .route("/")
    .get(getProjects)
    .post(addProject)
    .put(addTicketId)
router
    .route("/:id")
    .put(updateProject)
    .delete(deleteProject)

module.exports = router;