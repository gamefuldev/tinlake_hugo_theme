console.log('This theme was developed by Gameful - https://www.gameful.dev/');

const menu_button = document.querySelector('.js-menu-button');
const menu_open_icon = document.querySelector('.js-menu-button-open');
const menu_close_icon = document.querySelector('.js-menu-button-close');
const menu_container = document.querySelector('.js-menu-container');
const body = document.querySelector('body');

menu_button.addEventListener("click", (event) => {
  event.preventDefault();
  menu_open_icon.classList.toggle('hidden');
  menu_close_icon.classList.toggle('hidden');

  menu_container.classList.toggle('translate-x-0');
  menu_container.classList.toggle('translate-x-full');

  menu_container.classList.toggle('opacity-0');
  menu_container.classList.toggle('opacity-100');

  body.classList.toggle('overflow-hidden');
  body.classList.toggle('max-h-screen');
});