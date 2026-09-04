import './style.css';
import renderHomepage from './homepage.js';
import renderMenu from './menu.js';
import renderAbout from './about.js';

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');
const brandLogo = document.querySelector('#brand-home');

function clearContent() {
  content.textContent = '';
}

function setActiveButton(activeBtn) {
  [homeButton, menuButton, aboutButton].forEach(btn => btn?.classList.remove('active'));
  if (activeBtn) activeBtn.classList.add('active');
}

function loadTab(renderFn, button) {
  clearContent();
  renderFn();
  setActiveButton(button);
}

homeButton.addEventListener('click', () => {
  loadTab(renderHomepage, homeButton);
});

menuButton.addEventListener('click', () => {
  loadTab(renderMenu, menuButton);
});

aboutButton.addEventListener('click', () => {
  loadTab(renderAbout, aboutButton);
});

if (brandLogo) {
  brandLogo.addEventListener('click', () => {
    loadTab(renderHomepage, homeButton);
  });
}

// Initial render
loadTab(renderHomepage, homeButton);

