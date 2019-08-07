const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define('Students', {

    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },

    firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },

    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false
    },

    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },

    gpa: {
      type: Sequelize.FLOAT,
      allowNull: false
    },

    campusId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  
  });
  
  module.exports = Student;