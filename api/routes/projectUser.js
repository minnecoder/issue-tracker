const express = require('express');
const { verifyProjectId, verifyUserId, verifyProjectUserId } = require('../middleware/verifyIDs');
const {
  getProjectUsers,
  getSingleProjectUser,
  addProjectUser,
  updateProjectUser,
  deleteProjectUser,
} = require('../controllers/projectUser');

const router = express.Router();

router
  .route('/')
  .get(getProjectUsers)
  .post(
    verifyProjectId,
    verifyUserId,
    addProjectUser,
  );

router
  .route('/:id')
  .get(getSingleProjectUser)
  .put(
    verifyProjectId,
    verifyUserId,
    verifyProjectUserId,
    updateProjectUser,
  )
  .delete(
    verifyProjectId,
    verifyUserId,
    verifyProjectUserId,
    deleteProjectUser,
  );

module.exports = router;
