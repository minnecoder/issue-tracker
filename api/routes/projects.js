const express = require("express")


const {
    getProjects,
    addProject,
    updateProject,
    deleteProject
} = require("../controllers/projects")

const router = express.Router()

router
    .route("/")
    .get(getProjects)
    .post(addProject)
router
    .route("/:id")
    .put(updateProject)
    .delete(deleteProject)