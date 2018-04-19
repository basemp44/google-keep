function removeNote(grid, note) {
	Notes.remove(getNoteIndex(grid, note));
	note.remove();
}

function removeSelectedNotes(grid) {
	let listNotes = htmlCollectionToArray(grid);

	listNotes.forEach(note => {
		if (note.getElementsByTagName("input")[0].checked) {
			removeNote(grid, note);
		}
	})
}