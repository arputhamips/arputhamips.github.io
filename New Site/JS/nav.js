
const navLinks = document.getElementById("navlinks");
const btnIcon = document.getElementById("btn-icon");

isOpen = false;

function openNav() {
    navLinks.classList.add("nav-open");
    btnIcon.classList.replace("fa-bars","fa-xmark");
    isOpen = true;
  }

function closeNav() {
    navLinks.classList.remove("nav-open");
    navLinks.classList.add("nav-close");
    btnIcon.classList.replace("fa-xmark","fa-bars"); 
    isOpen = false;
    setTimeout(() => {
      navLinks.classList.remove("nav-close");
    }, 700);
  }

function ToggleNav() {
  isMobileSize = window.matchMedia("(max-width: 560px)").matches;
  // console.log(isMobileSize);
  
  if (isMobileSize) {
    if (!isOpen) {
      openNav();   
    } else {
      closeNav();
    }
  }

}