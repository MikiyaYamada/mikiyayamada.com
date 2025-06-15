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
  const toggleIcon = document.querySelector(".dropdown .dropdown-toggle");

  const isNowShown = dropdown.classList.toggle("show");
   toggleIcon.textContent = isNowShown ? "▲" : "▼";
}


document.addEventListener("DOMContentLoaded", () => {
  // ギャラリードロップダウンを初期状態で閉じる
  const dropdown = document.getElementById("gallery-dropdown");
  const toggleIcon = document.querySelector(".dropdown-toggle");

  if (dropdown) dropdown.classList.remove("show");
  if (toggleIcon) toggleIcon.textContent = "▼";

  // フェードイン処理
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
lightbox.option({
  fadeDuration: 300,
  imageFadeDuration: 300,
  resizeDuration: 300,
});

document.addEventListener("DOMContentLoaded", () => {
  // Lightbox表示時に戻るボタンを追加
  document.addEventListener("lightbox:opened", () => {
    if (!document.querySelector(".lb-back-button")) {
      const btn = document.createElement("a");
      btn.href = "javascript:lightbox.end()"; // Lightboxを閉じる
      btn.className = "lb-back-button";
      btn.textContent = "← 戻る";
      document.body.appendChild(btn);
    }
  });

  // Lightboxを閉じたら戻るボタンを削除
  document.addEventListener("lightbox:closed", () => {
    const btn = document.querySelector(".lb-back-button");
    if (btn) btn.remove();
  });
});
