window.onload = function () {
  asideBehaviour();
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

function toggleClass(id, classs) {
	document.getElementById(id).classList.toggle(classs);
}

function removeClass(id, classs) {
	document.getElementById(id).classList.remove(classs);
}

