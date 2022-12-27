const { app, BrowserWindow, crashReporter } = require("electron");
const path = require('path');

const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preloader.js"),
    }
  });

  win.loadURL(
    isDev
     ? "http://localhost:3000"
     : `file://${path.join(__dirname, "../build/index.html")}`
  );
  
  win.setMenuBarVisibility(false);
  win.maximize();
  win.show();
}

app.whenReady().then(() => {
  createWindow();

  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

crashReporter.start({
  submitURL: "https://github.com/queendeveloperbr"
})