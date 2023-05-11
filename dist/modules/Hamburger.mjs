export default class Hamburger {
    constructor(menu, closeBtn){
        this.menu = menu;
        this.closeBtn = closeBtn;
        // this.backdrop = document.querySelector('#modalBackdrop');
    }

    openModal(bd) {
        bd.classList.remove('hidden');
        console.log(bd);
    }

    closeModal(bd) {
        bd.classList.add('hidden');
        console.log(bd);
    }
}
