const { app, BrowserWindow, Notification } = require("electron");
const sequelize = require('./lib/database.js');

require('electron-reload')(__dirname);


let window;

/** Crea la ventana principal. */
function newApp() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
  });

  window.loadFile("src/view/index.html");
}

// Notify the User
function notify(title, body) {
  new Notification({title: title, body: body}).show();
}

// Nos conectamos a la db.
sequelize.sync({force: true, logging: console.log}).then(() => {
//sequelize.authenticate().then(() => {
    console.log("Nos hemos conectado a la base de datos");

    app.allowRendererProcessReuse = true;
    app.whenReady().then(newApp);

}).catch(error => {
    console.log("Se ha producidoun error", error);
});


/** Public. */
module.exports = {
    notify
};