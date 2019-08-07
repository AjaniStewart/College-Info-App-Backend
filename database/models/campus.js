const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define('campus', {

    id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
      },

    imgUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },

    address: {
        type: Sequelize.STRING,
        allowNull: false
      },

    description: {
        type: Sequelize.STRING,
        allowNull: false
      },
  
  });
  
  module.exports = Campus;
