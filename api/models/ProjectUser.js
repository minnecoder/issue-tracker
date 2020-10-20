const Sequelize = require('sequelize');
const db = require('../config/postgres-db');
const Project = require('./Project');
const User = require('./User');

const ProjectUser = db.define('project_users', {
  project_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Project,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  role: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

Project.hasMany(ProjectUser);
ProjectUser.belongsTo(Project);
User.hasMany(ProjectUser);
ProjectUser.belongsTo(User);

module.exports = ProjectUser;
