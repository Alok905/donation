const aboutPage = document.querySelector(".about_page");

const navBar = document.querySelector("nav");

const navLinks = document.querySelectorAll(".nav_link");

function navLinkClickListener() {
  navLinks.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
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
