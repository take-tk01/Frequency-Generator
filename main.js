const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600, minWidth: 800, minHeight: 600, autoHideMenuBar: true, webPreferences: {devTools: false}});

    let path = 'file://' + __dirname + '/index.html';
    mainWindow.loadURL(path);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
