window.onload = function() {
  headerMenuAsideCallback();
}

function headerMenuAsideCallback() {
  let headerMenu = document.getElementById("header-menu");
  headerMenu.addEventListener("click", e => {
    console.log("testing");
  })
}