const Project = require('../models/Project');

// @desc Get all projects
// @route GET /project
// @access All
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

//  @desc get single project by id
// @route GET /project/:id
// @access All
exports.getSingleProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Add project
// @route POST /project
// @access verified user
exports.addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Server Error',
    });
  }
};

// @desc Update project
// @route UPDATE /project/:id
// @access Verfied User
exports.updateProject = async (req, res) => {
  try {
    await Project.update(req.body, {
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

// @desc Delete project
// @route DELETE /project/:id
// @access Verified User
exports.deleteProject = async (req, res) => {
  try {
    await Project.destory({
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
