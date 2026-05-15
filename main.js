const { app, BrowserWindow } = require('electron')

function createwin(){
    const win = new BrowserWindow({
        width: 800,
        heigth: 600
})
        win.loadFile('index.html')
}

app.whenReady().then(createwin)