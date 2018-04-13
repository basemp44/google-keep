function toggleClass(id, classs) {
	document.getElementById(id).classList.toggle(classs);
}

function removeClass(id, classs) {
	document.getElementById(id).classList.remove(classs);
}

export {toggleClass, removeClass};