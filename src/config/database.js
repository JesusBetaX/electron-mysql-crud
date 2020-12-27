const { app } = require("electron");

module.exports = {

    driver: "sqlite",

    mysql: {
        dialect: "mysql", // "mariadb", 
        host: "localhost",
        database: "electrondb",
        username: "root",
        password: ""
    },

    sqlite: {
        dialect: 'sqlite',
        storage: app.getAppPath() + '/path/to/database.sqlite'
    },
}
