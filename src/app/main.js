const { BrowserWindow, Notification } = require("electron");

let window;

/** Crea la ventana principal. */
function createWindow() {
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

/** Public. */
module.exports = {
  createWindow,
  notify
};
