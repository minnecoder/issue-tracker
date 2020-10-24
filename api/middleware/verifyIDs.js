const Project = require('../models/Project');
const ProjectUser = require('../models/ProjectUser');
const User = require('../models/User');
const Ticket = require('../models/Ticket');

exports.verifyAssignedDev = async (req, res, next) => {
  const assigneddev = await User.findOne({
    where: {
      id: req.body.assignedDev,
    },
  });
  if (!assigneddev) {
    return res.status(404).json({
      success: false,
      error: 'Assigned Dev was not found',
    });
  }
  return next();
};

exports.verifySubmitter = async (req, res, next) => {
  const submitter = await User.findOne({
    where: {
      id: req.body.submitter,
    },
  });

  if (!submitter) {
    return res.status(404).json({
      success: false,
      error: 'Submitter was not found',
    });
  }
  return next();
};

exports.verifyProjectId = async (req, res, next) => {
  const projectid = await Project.findOne({
    where: {
      id: req.body.projectId,
    },
  });

  if (!projectid) {
    return res.status(404).json({
      success: false,
      error: 'Project ID was not found',
    });
  }
  return next();
};

exports.verifyTicketId = async (req, res, next) => {
  const ticket = await Ticket.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!ticket) {
    return res.status(404).json({
      success: false,
      error: 'Ticket not found',
    });
  }
  return next();
};

exports.verifyProjectUserId = async (req, res, next) => {
  const projectUser = await ProjectUser.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!projectUser) {
    return res.status(404).json({
      success: false,
      error: 'Project User not found',
    });
  }
  return next();
};

exports.verifyUserId = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found',
    });
  }
  return next();
};
