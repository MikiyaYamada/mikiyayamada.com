function toggleMenu(btn) {
  btn.classList.toggle("active");
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}

function toggleDropdown(e) {
  e.preventDefault();
  const dropdown = document.getElementById("gallery-dropdown");
  dropdown.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
});
