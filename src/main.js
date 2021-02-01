const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 320,
        height: 550,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setResizable(false)
    win.removeMenu()
    win.loadFile('src/index.html')
}
app.whenReady().then(createWindow)
