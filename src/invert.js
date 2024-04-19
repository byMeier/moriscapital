// // DECLARACIÓN DE VARIABLES

let nav = document.querySelector(".nav-list");
let header = document.querySelector(".header");
let burguer = document.querySelector("#burguer");
let scrolldown = document.querySelector("#scroll-down")

// // let scrolldown = document.querySelector("#scroll-down")

    // Manejo del segundo fragmento de código
    let y = window.scrollY;
    if (y > 10) {
        scrolldown.classList.add("goodbye");
    } else {
        scrolldown.classList.remove("goodbye");
    }


// MENÚ HAMBURGUESA

burguer.addEventListener("click", () => {
    burguer.classList.toggle("active");
    nav.classList.toggle("visible");
    nav.classList.toggle("blured");
    header.classList.add("blured");
});

// CERRAR MENÚ

let navButtons = document.querySelectorAll(".nav-button, .contacto");

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        burguer.classList.remove("active");
        nav.classList.remove("visible");
    });
});

// ANIMATE ON SCROLL //

AOS.init();