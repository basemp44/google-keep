function populateNavigation() {
	let items = [
		["note",          "Notas",                    "#"],
		["touch_app",     "Recordatorios",     "sep", "#"],
		["add",           "Añadir etiqueta",   "sep", "#"],
		["archive",       "Archivo",                  "#"],
		["delete",        "Papelera",          "sep", "#"],
		["settings",      "Configuracion",            "#"],
		["feedback",      "Feedback",                 "#"],
		["help",          "Ayuda",                    "#"],
		["devices_other", "Descargar App",            "#"],
		["keyboard",      "Atajos de teclado",        "#"]
	];
	let nav = document.getElementById("navigation");

	items.forEach(e => {
		nav.appendChild(
			new NavElem(e[0],e[1],e[2],e[3]).asHtmlElement()
		);
	});
}

class NavElem {
	constructor(icon, text, sep, href) {
		this.icon = icon;
		this.text = text;
		this.sep  = "sep" == sep ? "navigation-items-separator" : "";
		this.href = href;
	}

	asHtmlElement() {
		let node  = document.createElement("a");
		let tag_i = document.createElement("i");
		let tag_p = document.createElement("p");

		node.setAttribute("href", this.href);
		node.classList = `navigation-items ${this.sep}`;

		tag_i.classList = "material-icons";
		tag_i.textContent = this.icon;

		tag_p.textContent = this.text;

		node.appendChild(tag_i);
		node.appendChild(tag_p);
		
		return node;
	}
}