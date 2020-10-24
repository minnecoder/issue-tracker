const express = require('express');

const { verifyProjectId } = require('../middleware/verifyIDs');
const {
  getProjects,
  getSingleProject,
  addProject,
  updateProject,
  deleteProject,
} = require('../controllers/project');

const router = express.Router();

router
  .route('/')
  .get(getProjects)
  .post(addProject);

router
  .route('/:id')
  .get(getSingleProject)
  .put(verifyProjectId, updateProject)
  .delete(verifyProjectId, deleteProject);

module.exports = router;
