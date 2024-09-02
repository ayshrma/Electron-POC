
const {app, BrowserWindow} = require('electron'); 
const path = require('path');
const url = require('url')

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 600,
        height: 400,
        movable: false,
        // webPreferences: {
        //     nodeIntegration: true,
        //     contextIsolation: false,
        //   },
        // fullscreen: true, // Start in fullscreen mode
        // resizable: false, // Disable resizing
        // movable: false,  // Disable moving
        // frame: false,
    });

    

    // const startUrl = url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file',
    // });

    // mainWindow.loadURL(startUrl)
    mainWindow.loadURL('http://localhost:3000/')

    // mainWindow.on('focus', () => {
    //     console.log('Window has gained focus');
    //     // Handle the window gaining focus
    //   });
    
    //   mainWindow.on('blur', () => {
    //     console.log('Window has lost focus');
    //     // Handle the window losing focus
    //   });
}

app.whenReady().then(createMainWindow)



