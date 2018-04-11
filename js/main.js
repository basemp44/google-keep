window.onload = function () {
  headerMenuAsideCallback();
}

function headerMenuAsideCallback() {
  let headerMenu = document.getElementById("header-menu");
  headerMenu.addEventListener("click", ev => {
    if (window.innerWidth <= 768) {
      document.getElementById("aside-content-container").classList.toggle("navigation-show");
    }
  });

  let content = document.getElementById("content");
  content.addEventListener("click", ev => {
    document.getElementById("aside-content-container").classList.remove("navigation-show");
  })
}