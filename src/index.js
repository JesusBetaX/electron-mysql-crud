const { app } = require("electron");
const { createWindow } = require("./app/main");
const sequelize = require('./lib/database.js');

require('electron-reload')(__dirname);

// Nos conectamos a la db.
sequelize.sync({force: true, logging: console.log}).then(() => {
//sequelize.authenticate().then(() => {
    console.log("Nos hemos conectado a la base de datos");

    app.allowRendererProcessReuse = true;
    app.whenReady().then(createWindow);

}).catch(error => {
    console.log("Se ha producidoun error", error);
});
