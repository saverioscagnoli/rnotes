import { app, shell, BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import { mdToPdf } from "md-to-pdf";
import { writeFileSync } from "fs";
import { dialog } from "electron";
import icon from "../../resources/icon.png?asset";

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    maxWidth: 1074,
    maxHeight: 800,
    minWidth: 800,
    minHeight: 600,
    show: false,
    frame: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });

  mainWindow.setTitle("rnotes");

  ipcMain.on("toPDF", async (_, md) => {
    let sReq = await dialog.showSaveDialog(mainWindow, {
      title: "Save PDF",
      filters: [{ name: "pdf", extensions: ["pdf"] }]
    });

    if (sReq.canceled) return;

    let pdf = await mdToPdf({ content: md }).catch(console.error);
    if (pdf) {
      writeFileSync(sReq.filePath!, pdf.content);
    }
  });

  ipcMain.on("toMD", async (_, md) => {
    let sReq = await dialog.showSaveDialog(mainWindow, {
      title: "Save MD",
      filters: [{ name: "markdown", extensions: ["md"] }]
    });

    if (sReq.canceled) return;

    writeFileSync(sReq.filePath!, md);
  });

  ipcMain.on("getOs", e => {
    e.returnValue = process.platform;
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId("r.notes");

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
