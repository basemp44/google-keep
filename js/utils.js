function toggleClass(id, classs) {
	document.getElementById(id).classList.toggle(classs);
}

function removeClass(id, classs) {
	document.getElementById(id).classList.remove(classs);
}

function addClass(id, classs) {
	document.getElementById(id).classList.add(classs);
}

function isInputClear(input) {
	return !input.value.trim();
}

function clearInput(input) {
	input.value = "";
}