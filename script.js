// =====================================================
// ED MATECA
// Conhecimento que Eleva
// =====================================================

(() => {

  const body = document.body;

  const nav =
    document.querySelector(".nav");

  const menuToggle =
    document.querySelector(".menu-toggle");

  const themeToggle =
    document.getElementById("themeToggle");

  const year =
    document.getElementById("year");

  // ===================================
  // Ano automático
  // ===================================

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

  // ===================================
  // Menu Mobile
  // ===================================

  if (menuToggle && nav) {

    menuToggle.addEventListener(
      "click",
      () => {

        const isOpen =
          nav.classList.toggle("open");

        menuToggle.setAttribute(
          "aria-expanded",
          isOpen
        );

      }
    );

  }

  // ===================================
  // Tema Claro / Escuro
  // ===================================

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

        const currentTheme =
          body.classList.contains("dark")
            ? "dark"
            : "light";

        localStorage.setItem(
          "theme",
          currentTheme
        );

        updateThemeIcon();

      }
    );

  }

  function updateThemeIcon() {

    if (!themeToggle) return;

    themeToggle.innerHTML =
      body.classList.contains("dark")
        ? "☀️"
        : "🌙";

  }

  // ===================================
  // Formulário WhatsApp
  // ===================================

  const form =
    document.getElementById("contactForm");

  if (form) {

    form.addEventListener(
      "submit",
      (e) => {

        e.preventDefault();

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

        if (nameError) nameError.textContent = "";
        if (emailError) emailError.textContent = "";
        if (messageError) messageError.textContent = "";

        // Nome

        if (
          !name.value ||
          name.value.trim().length < 3
        ) {

          if (nameError) {

            nameError.textContent =
              "Informe seu nome completo.";

          }

          valid = false;

        }

        // Email

        const emailRegex =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
          !emailRegex.test(
            email.value
          )
        ) {

          if (emailError) {

            emailError.textContent =
              "Informe um e-mail válido.";

          }

          valid = false;

        }

        // Mensagem

        if (
          !message.value ||
          message.value.trim().length < 10
        ) {

          if (messageError) {

            messageError.textContent =
              "A mensagem deve possuir pelo menos 10 caracteres.";

          }

          valid = false;

        }

        if (!valid) {

          return;

        }

        const texto =

`Olá Edvaldo!

Nome: ${name.value}

E-mail: ${email.value}

Mensagem:
${message.value}`;

        const whatsappURL =

`https://wa.me/5519989487960?text=${encodeURIComponent(texto)}`;

        window.open(
          whatsappURL,
          "_blank"
        );

      }

    );

  }

})();
