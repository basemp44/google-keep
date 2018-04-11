window.onload = function() {
  headerMenuAsideCallback();
}

function headerMenuAsideCallback() {
  let headerMenu = document.getElementById("header-menu");
  headerMenu.addEventListener("click", ev => {
    ["aside-content", "navigation", "content"].forEach(el => {
      document.getElementById(el).classList.toggle("navigation-show");
    });
  });
}