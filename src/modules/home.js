const Home = (() => {
  const setHome = () => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('home-main');

    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = 'We are best known for';

    const h1 = document.createElement('h1');
    h1.innerHTML = '<span>Breakfast</span> <span>Lunch</span> <span>Dinner</span>';

    const button = document.createElement('button');
    button.setAttribute('id', 'menu-btn');
    button.classList.add('menu-btn');
    button.innerText = 'Look at our the menu';

    div.appendChild(h2);
    div.appendChild(h1);
    div.appendChild(button);

    main.appendChild(div);

    content.appendChild(main);
  };

  const setHomeActive = () => {
    const liHome = document.getElementById('home');
    liHome.classList.add('active');
  };

  return { setHome, setHomeActive };
})();

export default Home;