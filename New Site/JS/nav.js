
const navLinks = document.getElementById("navlinks");
const btnIcon = document.getElementById("btn-icon");

isOpen = false;

function ScrollLock() {
  document.body.style.overflowY = "hidden";
}

function ScrollUnlock() {
  document.body.style.overflowY = "visible";
}

function openNav() {
    navLinks.classList.add("nav-open");
    btnIcon.classList.replace("fa-bars","fa-xmark");
    isOpen = true;
    ScrollLock();
  }

function closeNav() {
    navLinks.classList.remove("nav-open");
    navLinks.classList.add("nav-close");
    btnIcon.classList.replace("fa-xmark","fa-bars"); 
    isOpen = false;
    setTimeout(() => {
      navLinks.classList.remove("nav-close");
    }, 700);
    ScrollUnlock();
  }

function ToggleNav() {
  isMobileSize = window.matchMedia("(max-width: 640px)").matches;
  // console.log(isMobileSize);
  
  if (isMobileSize) {
    if (!isOpen) {
      openNav();   
    } else {
      closeNav();
    }
  }

}