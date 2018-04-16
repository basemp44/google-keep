function searchNoteBehaviour() {
	let input     = document.getElementById("search-notes");
	let gridNotes = document.getElementById("grid-notes");

	input.addEventListener("keyup", ev => {
		filterNotes(gridNotes, input);
	});

	function filterNotes(gridNotes, input) {
		let showNoteIndexes = Notes.getIndexesFilter(input.value);

		htmlNotesAsArray(gridNotes).forEach((note,id) => {
			if (showNoteIndexes.includes(id)) {
				showNote(note);
			} else {
				hideNote(note);
			}
		});
	}

	function showNote(htmlNote) {
		htmlNote.classList.remove("hidden");
	}

	function hideNote(htmlNote) {
		htmlNote.classList.add("hidden");
	}

	function htmlNotesAsArray(gridNotes) {
		return Array.from(gridNotes.children);
	}
}