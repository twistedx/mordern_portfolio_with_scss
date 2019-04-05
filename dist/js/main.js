//select items from DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//Set state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

$("document").ready(function() {
  console.log("Firing!");
  var imgArr = document.getElementsByClassName("my__img");
  var modalWindow = document.getElementById("my__modal");
  var modalImg = document.getElementById("img01");
  var caption = document.getElementById("caption");
  var span = document.getElementById("close1");
  var modalBlock = document.getElementById("modal__block");

  for (i = 0; i < imgArr.length; i++) {
    var picture = imgArr[i];
    picture.onclick = function() {
      openImg(this);
    };
  }
  function openImg(pic) {
    modalWindow.style.display = "block";
    modalBlock.style.transform = "translateY(0%)";
    modalImg.src = pic.src;
    modalImg.alt = pic.alt;
    caption.innerHTML = modalImg.alt;
  }

  function close() {
    modalWindow.style.display = "none";
  }
  modalImg.onclick = function() {
    modalBlock.style.transform = "translateY(-500%)";
    setTimeout(close, 500);
  };
});
