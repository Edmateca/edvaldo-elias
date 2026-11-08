// =====================================================
// ED MATECA
// Conhecimento que Eleva
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  // =====================================
  // ANO AUTOMÁTICO
  // =====================================

  const year = document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

  // =====================================
  // MENU MOBILE
  // =====================================

  const menuToggle =
    document.querySelector(".menu-toggle");

  const nav =
    document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener(
      "click",
      () => {

        nav.classList.toggle("open");

        const expanded =
          nav.classList.contains("open");

        menuToggle.setAttribute(
          "aria-expanded",
          expanded
        );

      }
    );

  }

  // =====================================
  // TEMA ESCURO
  // =====================================

  const themeToggle =
    document.getElementById("themeToggle");

  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme === "dark") {

    body.classList.add("dark");

  }

  updateThemeIcon();

  function updateThemeIcon() {

    if (!themeToggle) return;

    themeToggle.innerHTML =

      body.classList.contains("dark")
        ? "☀️"
        : "🌙";

  }

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

  // =====================================
  // ANIMAÇÕES AO ROLAR
  // =====================================

  const observer =

    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

          }

        });

      },

      {
        threshold: 0.1
      }

    );

  document
    .querySelectorAll(
      ".card, .stat, .timeline article"
    )
    .forEach(el => {

      el.classList.add(
        "reveal"
      );

      observer.observe(el);

    });

  // =====================================
  // FORMULÁRIO
  // =====================================

  const form =
    document.getElementById("contactForm");

  if (form) {

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const name =
          document.getElementById("name");

        const email =
          document.getElementById("email");

        const message =
          document.getElementById("message");

        const nameError =
          document.getElementById("nameError");

        const emailError =
          document.getElementById("emailError");

        const messageError =
          document.getElementById("messageError");

        let valid = true;

        if (nameError)
          nameError.textContent = "";

        if (emailError)
          emailError.textContent = "";

        if (messageError)
          messageError.textContent = "";

        [
          name,
          email,
          message
        ].forEach(field => {

          field.classList.remove(
            "valid",
            "invalid"
          );

        });

        if (
          !name.value ||
          name.value.trim().length < 3
        ) {

          name.classList.add("invalid");

          if (nameError) {

            nameError.textContent =
              "Informe seu nome completo.";

          }

          valid = false;

        } else {

          name.classList.add("valid");

        }

        const emailRegex =

          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
          !emailRegex.test(
            email.value
          )
        ) {

          email.classList.add("invalid");

          if (emailError) {

            emailError.textContent =
              "Informe um e-mail válido.";

          }

          valid = false;

        } else {

          email.classList.add("valid");

        }

        if (
          !message.value ||
          message.value.trim().length < 10
        ) {

          message.classList.add("invalid");

          if (messageError) {

            messageError.textContent =
              "Mensagem muito curta.";

          }

          valid = false;

        } else {

          message.classList.add("valid");

        }

        if (!valid) return;

        const text =

`Olá Edvaldo!

Nome: ${name.value}

E-mail: ${email.value}

Mensagem:

${message.value}`;

        const url =

`https://wa.me/5519989487960?text=${encodeURIComponent(text)}`;

        window.open(
          url,
          "_blank"
        );

      }
    );

  }

  // =====================================
  // FILTROS GALERIA
  // =====================================

  const filters =

    document.querySelectorAll(
      ".filter-btn"
    );

  const galleryItems =

    document.querySelectorAll(
      ".gallery-item"
    );

  filters.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        filters.forEach(btn =>

          btn.classList.remove(
            "active"
          )

        );

        button.classList.add(
          "active"
        );

        const filter =

          button.dataset.filter;

        galleryItems.forEach(item => {

          const category =

            item.dataset.category;

          if (
            filter === "all" ||
            category === filter
          ) {

            item.style.display =
              "block";

          } else {

            item.style.display =
              "none";

          }

        });

      }
    );

  });

  // =====================================
  // LIGHTBOX
  // =====================================

  const lightbox =
    document.getElementById(
      "lightbox"
    );

  const lightboxImage =
    document.getElementById(
      "lightboxImage"
    );

  const lightboxCaption =
    document.getElementById(
      "lightboxCaption"
    );

  const images =

    [
      ...document.querySelectorAll(
        ".gallery-image"
      )
    ];

  let currentIndex = 0;

  function updateLightbox() {

    const image =

      images[currentIndex];

    lightboxImage.src =
      image.src;

    lightboxImage.alt =
      image.alt;

    if (lightboxCaption) {

      lightboxCaption.innerHTML =

        `<strong>${image.alt}</strong><br>
         ${image.dataset.caption || ""}`;

    }

  }

  function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox?.classList.add("show");

  }

  function closeLightbox() {

    lightbox?.classList.remove(
      "show"
    );

  }

  function nextImage() {

    currentIndex++;

    if (
      currentIndex >= images.length
    ) {

      currentIndex = 0;

    }

    updateLightbox();

  }

  function prevImage() {

    currentIndex--;

    if (
      currentIndex < 0
    ) {

      currentIndex =
        images.length - 1;

    }

    updateLightbox();

  }

  images.forEach(
    (image,index) => {

      image.addEventListener(
        "click",
        () => {

          openLightbox(index);

        }
      );

    }
  );

  document
    .querySelector(".lightbox-close")
    ?.addEventListener(
      "click",
      closeLightbox
    );

  document
    .querySelector(".lightbox-next")
    ?.addEventListener(
      "click",
      nextImage
    );

  document
    .querySelector(".lightbox-prev")
    ?.addEventListener(
      "click",
      prevImage
    );

  document.addEventListener(
    "keydown",
    event => {

      if (
        !lightbox?.classList.contains(
          "show"
        )
      ) return;

      if (
        event.key === "Escape"
      ) {

        closeLightbox();

      }

      if (
        event.key ===
        "ArrowRight"
      ) {

        nextImage();

      }

      if (
        event.key ===
        "ArrowLeft"
      ) {

        prevImage();

      }

    }
  );

});
