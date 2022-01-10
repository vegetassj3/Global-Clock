import {app,BrowserWindow} from "electron";
import path from "path";

let mainWindow : BrowserWindow;

app.on("ready",createWindow);

app.on('window-all-closed', function ():void {
     app.quit()
  })

  
function createWindow(): void{

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname,"preload.js")
        },
        show:false
      });
    
    mainWindow.loadFile('./index.html');
    mainWindow.on("ready-to-show",()=>mainWindow.show())
}