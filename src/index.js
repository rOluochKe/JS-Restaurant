import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';

const clearContent = () => {
  const content = document.getElementById('content');
  const listItems = document.querySelectorAll('header li');

  content.removeChild(content.lastChild);
  listItems.forEach(listItem => listItem.classList.remove('active'));
};

const displayMenu = () => {
  clearContent();
  Menu.setMenu();
  Menu.setMenuActive();
};

const displayHome = () => {
  clearContent();
  Home.setHome();
  Home.setHomeActive();

  const menuBtn = document.getElementById('menu-btn');
  menuBtn.addEventListener('click', displayMenu);
};

document.addEventListener('DOMContentLoaded', () => {
  Header.setHeader();
  Home.setHome();
  Home.setHomeActive();

  const logo = document.getElementById('logo');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menu-btn');

  logo.addEventListener('click', displayHome);
  home.addEventListener('click', displayHome);
  menu.addEventListener('click', displayMenu);
  menuBtn.addEventListener('click', displayMenu);
});