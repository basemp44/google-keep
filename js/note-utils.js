function getNoteIndex(grid, note) {
	let listNotes = htmlCollectionToArray(grid);
	return listNotes.findIndex(e => e.id == note.id);
}