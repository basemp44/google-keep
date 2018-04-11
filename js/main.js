window.onload = function () {
  headerMenuAsideCallback();
}

function headerMenuAsideCallback() {
  let headerMenu = document.getElementById("header-menu");
  headerMenu.addEventListener("click", ev => {
    document.getElementById("aside-content").classList.toggle("navigation-show");
  });
}