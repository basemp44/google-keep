class NotesImpl {
	constructor() {
		this.notes = [];
	}

	get length() {
		return this.notes.length;
	}

	forEach(fn) {
		return this.notes.forEach(fn);
	}

	add(txt, sync = true) {
		this.notes.push(txt.trim().toLowerCase());
		if (sync)
			this.pushLocalStorage();
	}

	remove(index, sync = true) {
		this.notes.splice(index, 1);
		if (sync)
			this.pushLocalStorage();
	}

	removeAll(sync = true) {
		this.notes.splice(0,this.notes.length);
		if (sync)
			this.pushLocalStorage();
	}

	pushLocalStorage() {
		localStorage.setItem("notes", JSON.stringify(this.notes));
	}

	pullLocalStorage() {
		let localNotes = JSON.parse(localStorage.getItem("notes"));
		if (localNotes) {
			this.removeAll(false);
			localNotes.forEach(e => this.add(e, false));
		}
	}

	getIndexesFilter(innerText) {
		return this.notes
			.map((e, i) => new RegExp(innerText).test(e) ? i : null)
			.filter(e => e != null);
	}
}

const Notes = new NotesImpl();