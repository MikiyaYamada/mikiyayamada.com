function toggleMenu(btn) {
  btn.classList.toggle("active");

  const nav = document.getElementById("nav-menu");
  const overlay = document.getElementById("overlay");

  const isActive = nav.classList.toggle("active");
  overlay.classList.toggle("show", isActive);
}

function closeMenu() {
  document.getElementById("nav-menu").classList.remove("active");
  document.querySelector(".menu-toggle").classList.remove("active");
  document.getElementById("overlay").classList.remove("show");
}
