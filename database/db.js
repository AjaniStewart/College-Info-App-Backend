// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize({
    host: 'ec2-174-129-227-51.compute-1.amazonaws.com',
    port: 5432,
    username: 'rygccpgvoaapzy',
    password: 'fbb0688b2f6e0533715218fb4a487551a7abec920b939dfbbd9506c0aded4852',
    database: 'd7q79bput51lnu',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
      },
    define: {
        timestamps: false
      },
  });

// Export our instance of Sequelize, which will be modified with models;
module.exports = db;
