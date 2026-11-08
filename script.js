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
// ====================================
// FILTROS DA GALERIA
// ====================================

const filterButtons =
  document.querySelectorAll(".filter-btn");

const galleryItems =
  document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter =
      button.dataset.filter;

    galleryItems.forEach((item) => {

      const category =
        item.dataset.category;

      if (
        filter === "all" ||
        category === filter
      ) {

        item.classList.remove("hidden");

      } else {

        item.classList.add("hidden");

      }

    });

  });

});
})();
// ====================================
// LIGHTBOX
// ====================================

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const galleryImages =
  document.querySelectorAll(".gallery-image");

const lightboxClose =
  document.querySelector(".lightbox-close");

galleryImages.forEach((image) => {

  image.addEventListener("click", () => {

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightbox.classList.add("show");

  });

});

if (lightboxClose) {

  lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("show");

  });

}

if (lightbox) {

  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

      lightbox.classList.remove("show");

    }

  });

}

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    lightbox?.classList.remove("show");

  }

});
