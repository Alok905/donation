const aboutPage = document.querySelector(".about_page");

const navBar = document.querySelector("nav");

const navLinks = document.querySelectorAll(".nav_link");

function navLinkClickListener() {
  if (window.innerWidth < 800) {
    navLinks.forEach((n) => (n.style.color = "#ffff00"));
    this.style.color = "#fff";
    linkDrawer();
  } else {
    navLinks.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  }
}
navLinks.forEach((nav_link) => {
  nav_link.addEventListener("click", navLinkClickListener);
});

window.addEventListener("scroll", scrollController);

// scrollController();
function scrollController() {
  const aboutTop = aboutPage.getBoundingClientRect().top;

  navBar.style.backgroundColor = aboutTop <= 0 ? "#05011f" : "#05011f00";
}

// Hamburger drawer

let linkVisible = true;
const link_drawer = document.getElementById("link_menu");
link_drawer.addEventListener("click", linkDrawer);

function linkDrawer() {
  const links = document.getElementById("nav_links");
  console.log("hello");
  linkVisible = !linkVisible;
  links.style.display = linkVisible ? "none" : "flex";
  const menu_drawer = document.getElementById("drawer_icon");
  if (!linkVisible) {
    menu_drawer.classList.remove("fa-bars");
    menu_drawer.classList.add("fa-xmark");
  } else {
    menu_drawer.classList.remove("fa-xmark");
    menu_drawer.classList.add("fa-bars");
  }
}
window.addEventListener("resize", function () {
  navLinks.forEach((n) => (n.style.color = "#ffff00"));
  document.getElementById("nav_links").style.display =
    window.innerWidth >= 800 ? "flex" : linkVisible ? "none" : "flex";
});
