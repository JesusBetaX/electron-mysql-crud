const { Sequelize } = require('sequelize');
const { database } = require('../config/config')

// Option Sqlite: Passing parameters separately (sqlite)
/*const sequelize  = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});*/

const sequelize  = new Sequelize(
  database.database, 
  database.username, 
  database.password, {
    host: database.host,
    dialect: database.dialect
  }
);

module.exports = sequelize;

