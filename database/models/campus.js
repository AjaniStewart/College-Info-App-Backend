const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("Campuses", {
    // id: {
    //   primaryKey: true,
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },

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
        type: Sequelize.TEXT,
        allowNull: false
      },
  
  });
  
  module.exports = Campus;
