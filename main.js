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
  // ドロップダウン初期化
  const dropdown = document.getElementById("gallery-dropdown");
  const toggleIcon = document.querySelector(".dropdown-toggle");
  if (dropdown) dropdown.classList.remove("show");
  if (toggleIcon) toggleIcon.textContent = "▼";

  // フェードイン処理
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade").forEach(el => observer.observe(el));

  // ✅ Lightboxが読み込まれているか確認してからoption実行
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      fadeDuration: 300,
      imageFadeDuration: 300,
      resizeDuration: 300,
    });

    // ✅ MutationObserverで戻るボタン
    const lbObserver = new MutationObserver(() => {
      const lightboxContainer = document.querySelector(".lightbox");
      const overlay = document.querySelector(".lightboxOverlay");

      if (lightboxContainer && overlay && !document.querySelector(".lb-back-button")) {
        const btn = document.createElement("a");
        btn.href = "javascript:lightbox.end()";
        btn.className = "lb-back-button";
        btn.textContent = "← 戻る";
        document.body.appendChild(btn);
      }

      if (!lightboxContainer && !overlay) {
        const btn = document.querySelector(".lb-back-button");
        if (btn) btn.remove();
      }
    });

    lbObserver.observe(document.body, { childList: true, subtree: true });
  } else {
    console.warn("lightbox が読み込まれていません");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    document.getElementById("gallery-dropdown")?.classList.remove("show");
    const toggleIcon = document.querySelector(".dropdown-toggle");
    if (toggleIcon) toggleIcon.textContent = "▼";
  }
});
