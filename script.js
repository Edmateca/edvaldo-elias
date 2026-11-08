// =====================================================
// ED MATECA
// Conhecimento que Eleva
// =====================================================

(() => {

  const body = document.body;
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const themeToggle = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  // ===============================
  // Ano automático
  // ===============================

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ===============================
  // Menu Mobile
  // ===============================

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = nav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });

    document.addEventListener("click", (event) => {

      const clickedInsideMenu =
        nav.contains(event.target);

      const clickedButton =
        menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedButton) {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

  }

  // ===============================
  // Tema
  // ===============================

  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme === "dark") {

    body.classList.add("dark");

  }

  updateThemeIcon();

  if (themeToggle) {

    themeToggle.addEventListener(
      "click",
      () => {

        body.classList.toggle("dark");

        const theme =
          body.classList.contains("dark")
            ? "dark"
            : "light";

        localStorage.setItem(
          "theme",
          theme
        );

        updateThemeIcon();

      }
    );

  }

  function updateThemeIcon() {

    if (!themeToggle) return;

    themeToggle.textContent =
      body.classList.contains("dark")
        ? "☀️"
        : "🌙";

  }

  // ===============================
  // Animação ao rolar
  // ===============================

  const revealElements =
    document.querySelectorAll(
      ".card, .stat, .timeline article"
    );

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

          }

        });

      },

      {
        threshold: 0.15,
      }

    );

  revealElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

  });

})();
