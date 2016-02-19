'use strict';

const ipc = require('ipc');
const $ = require('dombo');
var openFileEl = $('.open');

window.addEventListener('load', function () {
	var editor = ContentTools.EditorApp.get();

	editor.init('*[data-editable]', 'data-name');

	editor.bind('save', function () {
		// Set the editor as busy while we save our changes
		this.busy(true);

		// Send the update content to the server to be saved
		function onStateChange(ev) {
			// Dummy data. It must be 'readystatechange' server event
            var randStatus = Math.round(Math.random()) ? '200' : '0';
			ev = {			// ev has not to be redefined
				target: {
					readyState: 4,
					status: randStatus
				}
			};

			// Check if the request is finished
			if (ev.target.readyState == 4) {
				editor.busy(false);
				if (ev.target.status == '200') {
					// Save was successful, notify the user with a flash
					new ContentTools.FlashUI('ok');
				} else {
					// Save failed, notify the user with a flash
					new ContentTools.FlashUI('no');
				}
			}
		}

		window.setTimeout(onStateChange, 1000);
	});


	openFileEl.on('click', function () {
	    ipc.send('open-file-dialog');
	});
});
