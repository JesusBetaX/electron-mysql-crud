const { Sequelize } = require('sequelize');
const { driver, mysql, sqlite } = require('../config/database')

function newSequelize() {
  switch(driver) {
    case "mysql":
      return new Sequelize(
        mysql.database, 
        mysql.username, 
        mysql.password, {
          host: mysql.host,
          dialect: mysql.dialect
        }
      );
    
    case "sqlite":
      return new Sequelize({
        dialect: sqlite.dialect,
        storage: sqlite.storage
      });

    default:
      throw new Error("Driver " + driver + " no soportado");
  }
}

const sequelize = newSequelize();

module.exports = sequelize;

