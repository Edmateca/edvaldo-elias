// =====================================================
// ED MATECA
// Conhecimento que Eleva
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ANO AUTOMÁTICO
    // ==========================================

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

    // ==========================================
    // MENU RESPONSIVO
    // ==========================================

    const menuButton =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");

    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            () => {

                nav.classList.toggle("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    nav.classList.contains("open")
                );

            }
        );

    }

    // ==========================================
    // TEMA ESCURO
    // ==========================================

    const themeToggle =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

    }

    updateThemeIcon();

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "dark"
                );

                const currentTheme =

                    document.body.classList.contains(
                        "dark"
                    )
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

        themeToggle.textContent =

            document.body.classList.contains(
                "dark"
            )
                ? "☀️"
                : "🌙";

    }

    // ==========================================
    // FORMULÁRIO WHATSAPP
    // ==========================================

    const form =
        document.getElementById("contactForm");

    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const name =
                    document.getElementById(
                        "name"
                    );

                const email =
                    document.getElementById(
                        "email"
                    );

                const message =
                    document.getElementById(
                        "message"
                    );

                const nameError =
                    document.getElementById(
                        "nameError"
                    );

                const emailError =
                    document.getElementById(
                        "emailError"
                    );

                const messageError =
                    document.getElementById(
                        "messageError"
                    );

                let valid = true;

                // ==========================
                // LIMPA ERROS
                // ==========================

                [nameError,
                 emailError,
                 messageError]
                .forEach(field => {

                    if (field) {

                        field.textContent = "";

                    }

                });

                [name,
                 email,
                 message]
                .forEach(field => {

                    field.classList.remove(
                        "valid",
                        "invalid"
                    );

                });

                // ==========================
                // NOME
                // ==========================

                if (
                    name.value.trim().length < 3
                ) {

                    name.classList.add(
                        "invalid"
                    );

                    if (nameError) {

                        nameError.textContent =

                            "Informe seu nome completo.";

                    }

                    valid = false;

                } else {

                    name.classList.add(
                        "valid"
                    );

                }

                // ==========================
                // EMAIL
                // ==========================

                const emailRegex =

                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailRegex.test(
                        email.value
                    )
                ) {

                    email.classList.add(
                        "invalid"
                    );

                    if (emailError) {

                        emailError.textContent =

                            "Informe um e-mail válido.";

                    }

                    valid = false;

                } else {

                    email.classList.add(
                        "valid"
                    );

                }

                // ==========================
                // MENSAGEM
                // ==========================

                if (
                    message.value.trim()
                        .length < 10
                ) {

                    message.classList.add(
                        "invalid"
                    );

                    if (messageError) {

                        messageError.textContent =

                            "A mensagem deve possuir pelo menos 10 caracteres.";

                    }

                    valid = false;

                } else {

                    message.classList.add(
                        "valid"
                    );

                }

                // ==========================
                // BLOQUEIA ENVIO
                // ==========================

                if (!valid) {

                    return;

                }

                // ==========================
                // GERA TEXTO
                // ==========================

                const texto =

`Olá Edvaldo!

Nome: ${name.value}

E-mail: ${email.value}

Mensagem:

${message.value}`;

                // ==========================
                // WHATSAPP
                // ==========================

                const whatsappURL =

`https://wa.me/5519989487960?text=${encodeURIComponent(texto)}`;

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }

});
