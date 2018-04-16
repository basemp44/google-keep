class NotesImpl {
	constructor() {}

	static add(txt) {
		this.notes.push(txt.trim().toLowerCase());
	}

	filter(innerText) {
		this.notes.filter(e =>
			new RegExp(innerText).test(e)
		);
	}
}

const Notes = new NotesImpl();
Object.freeze(Notes);