// =====================================================
// ED MATECA
// Conhecimento que Eleva
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // TEMPO MÍNIMO DE PREENCHIMENTO
    // ==========================================

    const formStartTime = Date.now();

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

                const honeypot =
                    document.getElementById(
                        "website"
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
                // HONEYPOT ANTI-SPAM
                // ==========================

                if (
                    honeypot &&
                    honeypot.value !== ""
                ) {

                    return;

                }

                // ==========================
                // LIMPA ERROS
                // ==========================

                [
                    nameError,
                    emailError,
                    messageError
                ].forEach(field => {

                    if (field) {

                        field.textContent = "";

                    }

                });

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
                    message.value.trim().length < 10
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

                if (!valid) {

                    return;

                }

                // ==========================
                // TEMPO MÍNIMO
                // ==========================

                const elapsedTime =
                    (Date.now() - formStartTime) / 1000;

                if (elapsedTime < 5) {

                    alert(
                        "Aguarde alguns segundos antes de enviar."
                    );

                    return;

                }

                // ==========================
                // BLOQUEIO DE LINKS
                // ==========================

                const suspiciousLinks =
                    /(http|https|www\.)/gi;

                if (
                    suspiciousLinks.test(
                        message.value
                    )
                ) {

                    alert(
                        "Links não são permitidos na mensagem."
                    );

                    return;

                }

                // ==========================
                // CONTROLE DE FREQUÊNCIA
                // ==========================

                const lastSubmit =
                    localStorage.getItem(
                        "lastContactSubmit"
                    );

                if (lastSubmit) {

                    const difference =
                        Date.now() -
                        Number(lastSubmit);

                    if (difference < 60000) {

                        alert(
                            "Aguarde 1 minuto antes de enviar outra mensagem."
                        );

                        return;

                    }

                }

                localStorage.setItem(
                    "lastContactSubmit",
                    Date.now()
                );

                // ==========================
                // MONTA MENSAGEM
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
