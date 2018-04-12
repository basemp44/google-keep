window.onload = function () {
	asideBehaviour();
	searchContentBehaviour();
}

function asideBehaviour() {
	let headerMenu = document.getElementById("header-menu");
	let content = document.getElementById("content");

	headerMenu.addEventListener("click", toggleNavigation);
	content.addEventListener("click", hideNavigation)

	function toggleNavigation(ev) {
		if (window.innerWidth <= 768) {
			toggleClass("aside-content-container", "navigation-show");
		}
	}

	function hideNavigation(ev) {
		removeClass("aside-content-container", "navigation-show");
	}
}

function searchContentBehaviour() {
	let input  = document.getElementById("searcher-content-input");
	let btnadd = document.getElementById("searcher-content-btnadd");
	let grid   = document.getElementById("content");

	btnadd.addEventListener("click", addNote);

	function addNote(ev) {
		addNoteToGrid();
		clearInput();
	}

	function addNoteToGrid() {
		console.log("note added!");
	}

	function clearInput() {
		console.log("input cleaned!");
	}
}

function toggleClass(id, classs) {
	document.getElementById(id).classList.toggle(classs);
}

function removeClass(id, classs) {
	document.getElementById(id).classList.remove(classs);
}

