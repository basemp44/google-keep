function updateNote(note) {
	showModal(note)
		.then(value => handleSuccess(note, value))
		.catch(handleError)
		.finally(hideModal)

	function handleSuccess(note, value) {
		setNewValueNote(note, value);		
	}

	function handleError() {
		return;
	}

	function showModal(note) {
		getDivModal().classList.remove("hidden");
		getInputUpdate().value = getOldValueNote(note);

		return new Promise((resolve, reject) => {
			getInputUpdate().onkeyup = ev => {
				if (ev.key === "Enter") {
					resolve(getInputUpdate().value);
				}
			}
			getBtnOk().onclick = ev => resolve(getInputUpdate().value);
			getBtnCancel().onclick = reject;
		});
	}

	function hideModal() {
		getDivModal().classList.add("hidden");
	}

	function getOldValueNote(note) {
		return getParagraph(note).textContent;
	}

	function setNewValueNote(note, text) {
		return getParagraph(note).textContent = text;
	}

	function getParagraph(note) { return note.getElementsByTagName("p")[0]; }
	
	function getDivModal()    { return getById("update-note-modal"); }
	function getInputUpdate() { return getById("update-note-text"); }
	function getBtnOk()       { return getById("update-note-ok"); }
	function getBtnCancel()   { return getById("update-note-cancel"); }

	function getById(id) { return document.getElementById(id); }
}
