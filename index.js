const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuContainer = document.querySelector('.menu-container');
const timeBar = document.querySelector('.time-bar');
const homeIcon = document.querySelector('.home-icon');
const navMailIcon = document.querySelector('.nav-mail-icon');
const navMailItem = document.querySelector('.nav-mail-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menuContainer.classList.toggle('active');
  timeBar.classList.toggle('active');
  homeIcon.classList.toggle('active');
  navMailIcon.classList.toggle('active');
  navMailItem.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => {
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    menuContainer.classList.remove('active');
    timeBar.classList.remove('active');
    homeIcon.classList.remove('active');
    navMailItem.classList.remove('active');
  });
});
