window.onload = function() {
  headerMenuAsideCallback();
}

function headerMenuAsideCallback() {
  let headerMenu = document.getElementById("header-menu");
  headerMenu.addEventListener("click", ev => {
    ["main-grid", "main-header", "navigation", "content"].forEach(el => {
      document.getElementById(el).classList.toggle("navigation-show");
    });
  });
}