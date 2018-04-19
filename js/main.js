window.onload = function () {
	populateNavigation();
	asideBehaviour();
	addNoteBehaviour();
	searchNoteBehaviour();
}

window.onbeforeunload = function () {
	Notes.pushLocalStorage();
}