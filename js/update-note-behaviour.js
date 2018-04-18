let noteEdited;

function updateNoteBehaviour() {
	divModal         = document.getElementById("update-note-modal");
	inputUpdate      = document.getElementById("update-note-text");
	updateNoteOk     = document.getElementById("update-note-ok");
	updateNoteCancel = document.getElementById("update-note-cancel");

	updateNoteOk.addEventListener("click", ev => updateNoteSuccess(inputUpdate.value));
	updateNoteCancel.addEventListener("click", ev => updateNoteFailure(ev));

	function updateNoteSuccess(text) {
		setNewValueNote(noteEdited, text);
		hideModal();
	}

	function updateNoteFailure(ev) {
		hideModal();
	}
}

function updateNote(grid, note) {
	showModal(note);
	noteEdited = note;

	function showModal(note) {
		getDivModal().classList.remove("hidden");
		getInputUpdate().value = getOldValueNote(note);
	}

	function getInputUpdate() {
		return document.getElementById("update-note-text");
	}

	function getOldValueNote(note) {
		return note.getElementsByTagName("p")[0].textContent;
	}
}

function hideModal() {
	getDivModal().classList.add("hidden");
}

function getDivModal() {
	return document.getElementById("update-note-modal");
}

function setNewValueNote(note, text) {
	return note.getElementsByTagName("p")[0].textContent = text;
}
