const express = require('express');

const {
  addUser,
  loginUser,
  getUser,
} = require('../controllers/user');

const router = express.Router();

router.route('/add').post(addUser);
router.route('/login').post(loginUser);
router.route('/:id').get(getUser);

module.exports = router;
