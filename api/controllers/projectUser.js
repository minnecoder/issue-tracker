const ProjectUser = require('../models/ProjectUser');

// @desc Get all projectUsers
// @route GET /projectUser
// @access All
exports.getProjectUsers = async (req, res) => {
  try {
    const projectUsers = await ProjectUser.findAll();

    return res.status(200).json({
      success: true,
      count: projectUsers.length,
      data: projectUsers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

//  @desc get single projectUser by id
// @route GET /projectUser/:id
// @access All
exports.getSingleProjectUser = async (req, res) => {
  try {
    const projectUser = await ProjectUser.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: projectUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Add projectUser
// @route POST /projectUser
// @access verified user
exports.addProjectUser = async (req, res) => {
  try {
    const projectUser = await ProjectUser.create(req.body);

    return res.status(200).json({
      success: true,
      data: projectUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update projectUser
// @route UPDATE /projectUser/:id
// @access Verfied User
exports.updateProjectUser = async (req, res) => {
  try {
    await ProjectUser.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
};

// @desc Delete projectUser
// @route DELETE /projectUser/:id
// @access Verified User
exports.deleteProjectUser = async (req, res) => {
  try {
    await ProjectUser.destory({
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
