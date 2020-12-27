module.exports = {

    driver: "mysql",

    mysql: {
        dialect: "mysql", // "mariadb", 
        host: "localhost",
        database: "electrondb",
        username: "root",
        password: ""
    },

    sqlite: {
        dialect: 'sqlite',
        storage: 'path/to/database.sqlite'
    },
}