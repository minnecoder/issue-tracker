const express = require('express');

const {
  getProjectUsers,
  getSingleProjectUser,
  addProjectUser,
  updateProjectUser,
  deleteProjectUser,
} = require('../controllers/projectUser');

const router = express.Router();

router.route('/').get(getProjectUsers).post(addProjectUser);
router.route('/:id').get(getSingleProjectUser).put(updateProjectUser).delete(deleteProjectUser);
