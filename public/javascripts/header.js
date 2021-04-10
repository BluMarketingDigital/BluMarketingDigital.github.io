window.addEventListener('load', () => {
  const body = document.querySelector('body');
  const navButton = document.querySelector(".nav-button");
  const navMenu = document.querySelector('.nav-menu');
  const navElement = document.querySelectorAll('.nav-element');
  const header = document.querySelector('.header');

  navButton.addEventListener("click", () => {
    navButton.classList.toggle('opened');
    navButton.setAttribute('aria-expanded', navButton.classList.contains('opened'));
    header.classList.toggle('nav-menu-opened');
    body.classList.toggle("no-scroll");
    navMenu.classList.toggle("is-shown");
  });
  if (window.visualViewport.width < 768) {
    navElement.forEach(element => {
      element.addEventListener('click', () => {
        navButton.click();
      });
    });
  }
});