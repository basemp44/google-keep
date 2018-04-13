import {toggleClass, removeClass} from "utils";

export default function asideBehaviour() {
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