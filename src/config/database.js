module.exports = {

    driver: "mysql",

    mysql: {
        host: "localhost",
        database: "electrondb",
        username: "root",
        password: "",
        dialect: "mysql"
    },

    sqlite: {
        dialect: 'sqlite',
        storage: 'path/to/database.sqlite'
    },
}