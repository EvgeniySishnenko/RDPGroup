function popupForm () {
    const btn = document.querySelector('.header__button .btn');
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close');
    btn.addEventListener('click', (e)=> {
        e.preventDefault();
        popup.classList.add('popup-show');
    });
    close.addEventListener('click', () => {
        popup.classList.remove('popup-show');
    });
}
module.exports = popupForm;