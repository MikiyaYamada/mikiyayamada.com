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
  e.stopPropagation(); // 他の要素への伝播を防ぐ
  if (window.innerWidth >= 769) return;
  const dropdown = document.getElementById("gallery-dropdown");
  dropdown.classList.toggle("show");
    // ▼↔▲ トグル（オプション）
  const toggleIcon = e.currentTarget;
  const isShown = dropdown.classlist.contains("show");
    if (isShown) {
    dropdown.classList.remove("show");
    toggleIcon.textContent = "▼";
  } else {
    dropdown.classList.add("show");
    toggleIcon.textContent = "▲";
    }
}

// スクロールフェード
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
  document.getElementById("gallery-dropdown")?.classList.remove("show");
  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
});

// PCリサイズ時にドロップダウン強制クローズ
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    document.getElementById("gallery-dropdown").classList.remove("show");
  }
});
