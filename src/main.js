// // DECLARACIÓN DE VARIABLES

let nav = document.querySelector(".nav-list");
let header = document.querySelector(".header")
let burguer = document.querySelector("#burguer")
// // let scrolldown = document.querySelector("#scroll-down")

// // HEADER BLUR

window.onscroll = function () {
    let y = window.scrollY;

    // Manejo del primer fragmento de código
    if (y > 5) {
        header.classList.add("blured");
    } else {
        header.classList.remove("blured");
    }
};
//     // // Manejo del segundo fragmento de código
//     // let y2 = window.scrollY;
//     // if (y2 > 10) {
//     //     scrolldown.classList.add("goodbye");
//     // } else {
//     //     scrolldown.classList.remove("goodbye");
//     // }
// };

// MENÚ HAMBURGUESA

burguer.addEventListener("click", () => {
    burguer.classList.toggle("active");
    nav.classList.toggle("visible");
});

/* burger close */
let navButtons = document.querySelectorAll(".nav-button, .contacto");

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        burguer.classList.remove("active");
        nav.classList.remove("visible");
        header.classList.remove("mobile");
    });
});