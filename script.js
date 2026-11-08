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
// LIGHTBOX AVANÇADO
// ====================================

const lightbox =
  document.getElementById("lightbox");

const lightboxImage =
  document.getElementById("lightboxImage");

const lightboxCaption =
  document.getElementById("lightboxCaption");

const closeBtn =
  document.querySelector(".lightbox-close");

const prevBtn =
  document.querySelector(".lightbox-prev");

const nextBtn =
  document.querySelector(".lightbox-next");

const images =
  [...document.querySelectorAll(".gallery-image")];

let currentIndex = 0;

// =========================
// Abrir
// =========================

function openLightbox(index) {

  currentIndex = index;

  const image = images[index];

  lightboxImage.src =
    image.src;

  lightboxImage.alt =
    image.alt;

  lightboxCaption.innerHTML = `

    <strong>${image.alt}</strong>

  `;

  lightbox.classList.add("show");

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  closeBtn.focus();

}

// =========================
// Atualizar
// =========================

function updateLightbox() {

  const image =
    images[currentIndex];

  lightboxImage.src =
    image.src;

  lightboxImage.alt =
    image.alt;

  lightboxCaption.innerHTML = `

    <strong>${image.alt}</strong>

  `;

}

// =========================
// Fechar
// =========================

function closeLightbox() {

  lightbox.classList.remove(
    "show"
  );

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

}

// =========================
// Próxima
// =========================

function nextImage() {

  currentIndex++;

  if (currentIndex >= images.length) {

    currentIndex = 0;

  }

  updateLightbox();

}

// =========================
// Anterior
// =========================

function prevImage() {

  currentIndex--;

  if (currentIndex < 0) {

    currentIndex =
      images.length - 1;

  }

  updateLightbox();

}

// =========================
// Eventos
// =========================

images.forEach((image,index) => {

  image.addEventListener(
    "click",
    () => openLightbox(index)
  );

});

closeBtn?.addEventListener(
  "click",
  closeLightbox
);

nextBtn?.addEventListener(
  "click",
  nextImage
);

prevBtn?.addEventListener(
  "click",
  prevImage
);

lightbox?.addEventListener(
  "click",
  (event) => {

    if (event.target === lightbox) {

      closeLightbox();

    }

  }
);

// =========================
// Teclado
// =========================

document.addEventListener(
  "keydown",
  (event) => {

    if (
      !lightbox.classList.contains("show")
    ) return;

    switch(event.key){

      case "Escape":
        closeLightbox();
        break;

      case "ArrowRight":
        nextImage();
        break;

      case "ArrowLeft":
        prevImage();
        break;

    }

  }
);
});
/* ===================== */
/* FORMULÁRIOS */
/* ===================== */

form{

  display:flex;

  flex-direction:column;

  gap:.75rem;

}

label{

  font-weight:600;

}

input,
textarea{

  width:100%;

  padding:.9rem;

  border:1px solid var(--border);

  border-radius:12px;

  background:var(--bg);

  color:var(--text);

  font-family:inherit;

}

input:focus,
textarea:focus{

  outline:none;

  border-color:var(--primary);

  box-shadow:0 0 0 3px rgba(91,227,122,.2);

}

.error{

  color:#e53935;

  min-height:20px;

}

#successMsg{

  color:var(--primary);

  font-weight:600;

  margin-top:1rem;

}
