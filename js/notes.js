class NotesImpl {
	constructor() {
		this.notes = [];
	}

	get length() {
		return this.notes.length;
	}

	add(txt) {
		this.notes.push(txt.trim().toLowerCase());
	}

	remove(index) {
		this.notes.splice(index, 1);
	}

	getIndexesFilter(innerText) {
		return this.notes
			.map((e, i) => new RegExp(innerText).test(e) ? i : null)
			.filter(e => e != null);
	}
}

const Notes = new NotesImpl();