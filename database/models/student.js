const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("Students", {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },

    firstName: {
        type: Sequelize.TEXT,
        allowNull: false
      },

    lastName: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    imageUrl: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    gpa: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    CampusId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: 'Campuses', // <<< Note, its table's name, not object name
      referencesKey: 'id'
      
    },
  });
  
  module.exports = Student;