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

	add(txt, index=undefined) {
		if (index === undefined)
			this.notes.push(txt.trim().toLowerCase());
		else
			this.notes.splice(index, 0, txt);
	}

	remove(index) {
		this.notes.splice(index, 1);
	}

	update(newTxt, index) {
		this.remove(index);
		this.add(newTxt, index);
	}

	removeAll() {
		this.notes.splice(0, this.notes.length);
	}

	pushLocalStorage() {
		localStorage.setItem("notes", JSON.stringify(this.notes));
	}

	pullLocalStorage() {
		let localNotes = JSON.parse(localStorage.getItem("notes"));
		if (localNotes) {
			this.removeAll();
			localNotes.forEach(e => this.add(e));
		}
	}

	getIndexesFilter(innerText) {
		return this.notes
			.map((e, i) => new RegExp(innerText).test(e) ? i : null)
			.filter(e => e != null);
	}
}

const Notes = new NotesImpl();