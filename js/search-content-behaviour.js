export default function searchContentBehaviour() {
	let input  = document.getElementById("searcher-content-input");
	let btnadd = document.getElementById("searcher-content-btnadd");
	let grid   = document.getElementById("content");
	
	btnadd.addEventListener("click", addNote);
	input.addEventListener("input", enableOrDisableBtnAdd);

	function enableOrDisableBtnAdd() {
		if (input.value == "")
			disableBtnAdd();
		else
			enableBtnAdd();
	}

	function addNote(ev) {
		addNoteToGrid();
		clearInput();
		disableBtnAdd();
	}

	function enableBtnAdd() {
		btnadd.disabled = false;
	}
	
	function disableBtnAdd() {
		btnadd.disabled = true;
	}

	function addNoteToGrid() {
		let note = createNote(input.value);
		grid.appendChild(note);
	}

	function clearInput() {
		input.value = "";
	}

	function createNote(text) {
		let note = document.createElement("div");
		let p = document.createElement("p");

		note.setAttribute("class", "content-notes");
		p.textContent = text;

		note.appendChild(p);
		return note;
	}
}