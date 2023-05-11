import Hamburger from "./modules/Hamburger.mjs";
// const hamburgerIcon = document.querySelector('#hamburgerIcon');
// const modalClose = document.querySelector('#modalClose');
const backdrop = document.querySelector('#modalBackdrop');
const hamburger = new Hamburger();

hamburgerIcon.addEventListener('click', function(){
    hamburger.openModal(backdrop);
});

modalClose.addEventListener('click', function(){
    hamburger.closeModal(backdrop)
});

