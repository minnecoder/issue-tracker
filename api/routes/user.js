const express = require('express');
const { verifyUserId } = require('../middleware/verifyIDs');
const {
  addUser,
  loginUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const router = express.Router();

router
  .route('/')
  .get(getUsers)
  .post(addUser);

router
  .route('/login')
  .post(loginUser);

router
  .route('/:id')
  .get(getUser)
  .put(
    verifyUserId,
    updateUser,
  )
  .delete(
    verifyUserId,
    deleteUser,
  );

module.exports = router;
