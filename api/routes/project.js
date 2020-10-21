const express = require('express');

const {
  getProjects,
  getSingleProject,
  addProject,
  updateProject,
  deleteProject,
} = require('../controllers/project');

const router = express.Router();

router.route('/').get(getProjects).post(addProject);
router.route('/:id').get(getSingleProject).put(updateProject).delete(deleteProject);
