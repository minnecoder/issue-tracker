const express = require('express');

const {
  addUser,
  loginUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const router = express.Router();

router.route('/').get(getUsers).post(addUser);
router.route('/login').post(loginUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
