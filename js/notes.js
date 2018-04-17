class NotesImpl {
	constructor() {
		this.notes = [];
	}

	add(txt) {
		this.notes.push(txt.trim().toLowerCase());
	}

	remove(index) {
		this.notes.slice(0,index).concat(a.slice(index+1));
	}

	getIndexesFilter(innerText) {
		return this.notes
			.map((e, i) => new RegExp(innerText).test(e) ? i : null)
			.filter(e => e != null);
	}
}

const Notes = new NotesImpl();
Object.freeze(Notes);