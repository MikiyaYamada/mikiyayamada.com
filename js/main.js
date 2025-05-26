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

function toggleDropdown(e) {
  e.preventDefault();
   // PCではJSによる表示切り替えを無効化（hoverで対応）
  if (window.innerWidth >= 769) return;
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

  document.addEventListener('click', (e) => {
  const dropdown = document.getElementById("gallery-dropdown");
  const trigger = e.target.closest('.dropdown');

  // dropdown外をクリックしたら閉じる（モバイルのみ）
  if (!trigger && window.innerWidth < 769) {
    dropdown.classList.remove("show");
  }
});

  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
});
