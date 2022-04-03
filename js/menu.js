const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.navbar-menu')
const menuLinks = document.querySelectorAll('.navbar-menu__item')

menuButton.addEventListener('click', function () {
  menu.classList.toggle('navbar-menu--visible');
  // document.querySelector('body').classList.toggle('lock');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('navbar-menu--visible');
    console.log('click');
  });
});

document.addEventListener('click', (event) => {
  if (!(event.target.closest('.navbar-menu') || event.target.closest('.menu-button'))) {
    menu.classList.remove('navbar-menu--visible');
  }
})