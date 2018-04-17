function removeNote(grid, note) {
	Notes.remove(getNoteIndex(grid, note));
	note.remove();

	function getNoteIndex(grid, note) {
		let listNodes = htmlCollectionToArray(grid);
		return listNodes.findIndex(e => e.id == note.id);
	}
}