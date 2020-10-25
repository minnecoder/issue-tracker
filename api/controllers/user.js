const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @desc Login user
// @route POST /user/login
// @access Verified user
exports.loginUser = async (req, res) => {
  // Checks if email exists
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(404).json({
      error: 'Email or password is incorrect',
    });
  }

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({
      error: 'Email or password is incorrect',
    });
  }

  // Create and assign token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return res.header('Authorization', token).json({ token });
};

// @desc Get all users
// @route GET /user
// @access Admin
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Get single user
// @route GET /user/get/id:
// @access Driver, Admin
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.params.email },
    }).select(
      '-password',
    );

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc add user
// @route POST /user/add
// @access verified user
exports.addUser = async (req, res) => {
  // Check if email is already used
  const emailExists = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (emailExists) {
    return res.status(400).json({
      error: 'Email address already exists',
    });
  }

  // Create hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update User
// @route UPDATE /user/:id
// @access Admin
exports.updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Delete User
// @route DELETE /user/:id
// @access Admin
exports.deleteUser = async (req, res) => {
  try {
    await User.destory({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};
