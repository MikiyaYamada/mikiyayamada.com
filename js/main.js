document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const dropdown = document.getElementById("gallery-dropdown");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelector(".dropdown > a").addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade").forEach((el) => {
    observer.observe(el);
  });
});