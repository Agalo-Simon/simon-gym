const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggler.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  navbarToggler.classList.toggle("open"); // Optional: for toggler icon animation
});
