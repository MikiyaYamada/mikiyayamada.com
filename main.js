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
  document.getElementById("gallery-dropdown")?.classList.remove("show");
  document.querySelector(".dropdown-toggle").textContent = "▼";
}

function toggleDropdown(e) {
  e.preventDefault();
  e.stopPropagation();

  const dropdown = document.getElementById("gallery-dropdown");
  const toggleIcon = e.currentTarget;

  const isShown = dropdown.classList.contains("show");
  dropdown.classList.toggle("show");
  toggleIcon.textContent = isShown ? "▼" : "▲";
}


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade").forEach(el => observer.observe(el));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    document.getElementById("gallery-dropdown")?.classList.remove("show");
    const toggleIcon = document.querySelector(".dropdown-toggle");
    if (toggleIcon) toggleIcon.textContent = "▼";
  }
});
