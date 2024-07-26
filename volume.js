const wrapper = document.querySelector('.wrapper');
const btnpopup = document.querySelector('.btnlogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
btnpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});