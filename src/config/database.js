module.exports = {

    driver: "mysql",

    mysql: {
        dialect: "mysql",
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