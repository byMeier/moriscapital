// // DECLARACIÓN DE VARIABLES

let nav = document.querySelector(".nav-list");
let header = document.querySelector(".header");
let burguer = document.querySelector("#burguer");
let btnAbrirModal1 = document.querySelector("#btn-abrir-modal1");
let btnCerrarModal1 = document.querySelector("#btn-cerrar-modal1");
let modal1 = document.querySelector("#modal1");
let btnAbrirModal2 = document.querySelector("#btn-abrir-modal2");
let btnCerrarModal2 = document.querySelector("#btn-cerrar-modal2");
let modal2 = document.querySelector("#modal2");
let btnAbrirModal3 = document.querySelector("#btn-abrir-modal3");
let btnCerrarModal3 = document.querySelector("#btn-cerrar-modal3");
let modal3 = document.querySelector("#modal3");
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

// MODAL

// VICENTE
btnAbrirModal1.addEventListener("click",()=>{
    modal1.showModal();
    modal1.scrollTo(0, 0);
})

btnCerrarModal1.addEventListener("click",()=>{
    modal1.close();
})

//BERNARDO
btnAbrirModal2.addEventListener("click",()=>{
    modal2.showModal();
    modal2.scrollTo(0, 0);
})

btnCerrarModal2.addEventListener("click",()=>{
    modal2.close();
})

//BRENDA
btnAbrirModal3.addEventListener("click",()=>{
    modal3.showModal();
    modal3.scrollTo(0, 0);
})

btnCerrarModal3.addEventListener("click",()=>{
    modal3.close();
})

