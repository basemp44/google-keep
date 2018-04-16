function searchContentBehaviour() {
	let input     = document.getElementById("searcher-content-input");
	let btnAdd    = document.getElementById("searcher-content-btnadd");
	let gridNotes = document.getElementById("grid-notes");
	
	btnAdd.addEventListener("click", ev => addNote(gridNotes, input, btnAdd));
	input.addEventListener("input", ev => enableOrDisableBtnAdd(input, btnAdd));

	function enableOrDisableBtnAdd(input, btn) {
		if (isInputClear(input))
			disableBtnAdd(btn);
		else
			enableBtnAdd(btn);
	}

	function addNote(grid, input, btn) {
		addNoteToGrid(grid, input);
		clearInput(input);
		disableBtnAdd(btn);
	}

	function enableBtnAdd(btn) {
		btn.disabled = false;
	}
	
	function disableBtnAdd(btn) {
		btn.disabled = true;
	}

	function addNoteToGrid(grid, input) { // !!!
		let note = createNote(input.value);
		grid.appendChild(note);
	}

	function clearInput(input) {
		input.value = "";
	}

	function isInputClear(input) {
		return !input.value.trim();
	}

	function createNote(text) {
		let note = document.createElement("article");
		let p = document.createElement("p");

		note.setAttribute("class", "content-notes");
		p.textContent = text;

		note.appendChild(p);
		return note;
	}
}