function removeNote(grid, note) {
	Notes.remove(getNoteIndex(grid, note));
	note.remove();

	function getNoteIndex(grid, note) {
		let listNotes = htmlCollectionToArray(grid);
		return listNotes.findIndex(e => e.id == note.id);
	}
}

function removeSelectedNotes(grid) {
	let listNotes = htmlCollectionToArray(grid);

	listNotes.forEach(note => {
		if (note.getElementsByTagName("input")[0].checked) {
			removeNote(grid, note);
		}
	})
}