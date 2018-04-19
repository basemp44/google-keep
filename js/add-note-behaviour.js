function addNoteBehaviour() {
	const IdNoteGenerator = idNoteCreateGenerator();

	let input     = document.getElementById("add-note-input");
	let btnAdd    = document.getElementById("add-note-btnadd");
	let btnRemove = document.getElementById("add-note-btnremove");
	let gridNotes = document.getElementById("grid-notes");
	
	btnAdd.addEventListener("click", ev => addNote(gridNotes, input, btnAdd));
	btnRemove.addEventListener("click", ev => removeSelectedNotes(gridNotes));
	
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
		if (!isInputClear(input)) {
			addNoteToGrid(grid, input);
			addNoteToLogic(input)
			clearInput(input);
			disableBtnAdd(btn);
		}
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

	function addNoteToGrid(grid, input) {
		let note = createNote(grid, input.value);
		grid.appendChild(note);
	}

	function createNote(grid, text) {
		let note = document.createElement("article");
		note.id = getNextNoteId();
		note.classList = "note";
		note.innerHTML = innerHTMLNote(text);
		setNoteListeners(grid, note);
		return note;
	}

	function getNextNoteId() {
		return `note-${IdNoteGenerator.next().value}`;
	}

	function innerHTMLNote(text) {
		return `
		<p>${text}</p>
		<input type="checkbox" name="check-note">
		<div class="note-crud-container">
			<button class="note-update-btn">
				<i class="material-icons">border_color</i>
			</button>
			<button class="note-remove-btn">
				<i class="material-icons">delete</i>
			</button>
		</div>`;
	}

	function setNoteListeners(grid, note) {
		let btnRemove = getBtnRemoveNote(note);
		let btnUpdate = getBtnUpdateNote(note);

		btnRemove.addEventListener("click", e => removeNote(grid, note));
		btnUpdate.addEventListener("click", e => updateNote(note));

		function getBtnRemoveNote(note) {
			return note.getElementsByClassName("note-remove-btn")[0];
		}

		function getBtnUpdateNote(note) {
			return note.getElementsByClassName("note-update-btn")[0];
		}
	}

	function* idNoteCreateGenerator() {
		let i=0;
		while(true) {
			yield i++;
		}
	}
}