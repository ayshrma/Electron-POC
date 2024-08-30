// const { app, BrowserWindow } = require('electron');
// const path = require('node:path');
// // Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) {
//   app.quit();
// }
// const createWindow = () => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     // webPreferences: {
//     //   // preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
//     // },
//   });
  
//   const startUrl = url.format({
//     pathname: path.join(__dirname, 'index.html'),
//     protocol: 'file',
// });

// mainWindow.loadURL(startUrl)

//   mainWindow.webContents.openDevTools();
// };

// app.whenReady().then(() => {
//   createWindow();
  
//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

const {app, BrowserWindow} = require('electron'); 
const path = require('path');
const url = require('url')

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 600,
        height: 400,
        movable: false,
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
}

app.whenReady().then(createMainWindow)



