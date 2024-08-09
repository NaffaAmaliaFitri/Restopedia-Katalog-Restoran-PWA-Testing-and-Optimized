import 'regenerator-runtime';
import './views/custom/hero';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#nav_mobile'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu');
  const hero = document.querySelector('.hero');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const buttonElement = document.querySelector('#drawer');

  if (menu) {
    menu.addEventListener('click', (event) => {
      console.log(event);
      buttonElement.classList.toggle('open');
      event.stopPropagation();
    });
  }

  if (hero) {
    hero.addEventListener('click', () => {
      buttonElement.classList.remove('open');
    });
  }

  if (main) {
    main.addEventListener('click', () => {
      buttonElement.classList.remove('open');
    });
  }

  if (footer) {
    footer.addEventListener('click', () => {
      buttonElement.classList.remove('open');
    });
  }
});
