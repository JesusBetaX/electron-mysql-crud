const { Sequelize } = require('sequelize');
const { driver, mysql, sqlite } = require('../config/database')

/** Metodo fabrica para la creación de Sequelize. */
function newSequelize() {
  switch(driver) {
    case "mysql":
      return new Sequelize(mysql.database, mysql.username, mysql.password, {
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

/** Instancia el objeto Sequelize. */
const sequelize = newSequelize();


/** Public */
module.exports = sequelize;

