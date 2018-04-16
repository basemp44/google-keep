function addNoteBehaviour() {
	let input     = document.getElementById("add-note-input");
	let btnAdd    = document.getElementById("add-note-btnadd");
	let gridNotes = document.getElementById("grid-notes");
	
	btnAdd.addEventListener("click", ev => addNote(gridNotes, input, btnAdd));
	
	input.addEventListener("keyup", ev => {
		if (ev.key === "Enter") {
			addNote(gridNotes, input, btnAdd);
		}
	});
	
	input.addEventListener("input", ev => enableOrDisableBtnAdd(input, btnAdd));

	function enableOrDisableBtnAdd(input, btn) {
		if (isInputClear(input))
			disableBtnAdd(btn);
		else
			enableBtnAdd(btn);
	}

	function addNote(grid, input, btn) {
		addNoteToGrid(grid, input);
		addNoteToLogic(input)
		clearInput(input);
		disableBtnAdd(btn);
	}

	function enableBtnAdd(btn) {
		btn.disabled = false;
	}
	
	function disableBtnAdd(btn) {
		btn.disabled = true;
	}

	function addNoteToLogic(input) {
		Notes.add(input.value);
	}

	function addNoteToGrid(grid, input) { // !!!
		let note = createNote(input.value);
		grid.appendChild(note);
	}

	function createNote(text) {
		let note = document.createElement("article");
		let p = document.createElement("p");

		note.classList = "content-notes";
		p.textContent = text;

		note.appendChild(p);
		return note;
	}
}