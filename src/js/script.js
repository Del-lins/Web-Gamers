let headerOpen = false;

let openHeader = document.querySelector("#open-header");
let headerMenu = document.querySelector("#header-menu");
let closeHeader = document.querySelector("#close-header");

function toggleMenu() {
  if (!headerOpen) {
    headerMenu.classList.add("open");
    openHeader.style.display = "none";
    closeHeader.style.display = "inline";
    headerOpen = true;
  } else {
    headerMenu.classList.remove("open");
    openHeader.style.display = "inline";
    closeHeader.style.display = "none";
    headerOpen = false;
  }
}
openHeader.addEventListener("click", toggleMenu);
closeHeader.addEventListener("click", toggleMenu);
