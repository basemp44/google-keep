function searchNoteBehaviour() {
	let input     = document.getElementById("search-notes");
	let gridNotes = document.getElementById("grid-notes");

	input.addEventListener("keyup", ev => {
		if (ev.key === "Enter") {
			filterNotes(gridNotes, input);
		}
	});

	function filterNotes() {
		console.log("filtered!");
	}
}