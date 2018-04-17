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
		let note = createNote(input.value);
		grid.appendChild(note);
	}

	function createNote(text) {
		let note = document.createElement("article");
		note.classList = "note";
		note.innerHTML = innerHTMLNote(text);
		setEventListeners(note);
		return note;
	}

	function innerHTMLNote(text) {
		return `
		<p>${text}</p>
		<div class="note-remove-container">
			<button class="note-remove-btn">
				<i class="material-icons">delete</i>
			</button>
		</div>`;
	}

	function setEventListeners(note) {
		let btn = getDeleteBtnNote(note);
		btn.addEventListener("click", e => console.log("hola"))
	}

	function getDeleteBtnNote(note) {
		return note.getElementsByClassName("note-remove-btn")[0];
	}
}