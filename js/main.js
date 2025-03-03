document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true, // Hace que el carrusel sea infinito
        autoplay: {
            delay: 3000, // Cambia cada 3 segundos
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    });
});
