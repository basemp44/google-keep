function searchNoteBehaviour() {
	let input = document.getElementById("search-notes");
	let gridNotes = document.getElementById("grid-notes");

	input.addEventListener("keyup", ev => {
		filterNotes(gridNotes, input);
	});

	function filterNotes(gridNotes, input) {
		let showNoteIndexes = Notes.getIndexesFilter(input.value);

		htmlCollectionToArray(gridNotes).forEach((note, id) => {
			if (showNoteIndexes.includes(id)) {
				showNote(note);
				unHighLight(note);
				highLight(note, input.value);
			} else {
				hideNote(note);
			}
		});
	}

	function showNote(htmlNote) {
		htmlNote.classList.remove("hidden");
	}

	function hideNote(htmlNote) {
		htmlNote.classList.add("hidden");
	}

	function highLight(htmlNote, text) {
		if (text) {
			let p = htmlNote.firstElementChild;
			p.innerHTML = highLightStr(p.innerHTML, text);
		}
	}

	function unHighLight(htmlNote) {
		let p = htmlNote.firstElementChild;
		p.innerHTML = unHighLightStr(p.innerHTML);
	}

	function highLightStr(innerHTML, oldStr) {
		let newStr = `<span class="highlight">${oldStr}</span>`;
		return innerHTML.replace(new RegExp(oldStr, "g"), newStr);
	}

	function unHighLightStr(innerHTML) {
		let expr = `(<span class="highlight">)|(</span>)`;
		return innerHTML.replace(new RegExp(expr, "g"), "");
	}
}