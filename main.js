'use strict';

const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.
const ipc = require('ipc'); // Let's us create a communication channel between main and renderer processes
const dialog = require('dialog');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform != 'darwin') {
		app.quit();
	}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	});

	// and load the index.html of the app.
	mainWindow.loadURL('file://' + __dirname + '/app/index.html');

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	ipc.on('open-file-dialog', function () {
		var files = dialog.showOpenDialog({
			properties: ['openFile', 'multiSelections']
		});
		// if (files)
	})
});