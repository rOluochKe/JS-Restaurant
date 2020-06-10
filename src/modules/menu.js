const Menu = (() => {
  const menuList = [
    {
      title: 'Breakfast',
      items: ['Sweet Pancake', 'Screamed Matoke', 'Banana Pancake', 'Viazi Kirai', 'Uji'],
    },
    {
      title: 'Lunch',
      items: ['Tea and Mahamri', 'The Arrow Root', 'The Sweet Potato', 'Kenyan Pilau', 'Wali wa Nazi'],
    },
    {
      title: 'Dinner',
      items: ['Sukuma Wiki', 'Kenyan Stew', 'Nyama Choma', 'Plantain Banana Stew', 'Kachumbari'],
    },
  ];

  const addSection = menu => {
    const section = document.createElement('section');

    const h2 = document.createElement('h2');
    h2.innerText = menu.title;

    const ul = document.createElement('ul');

    menu.items.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      ul.appendChild(li);
    });

    section.appendChild(h2);
    section.appendChild(ul);

    return section;
  };

  const setMenu = () => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('menu-main');

    menuList.forEach(menu => {
      const section = addSection(menu);
      main.appendChild(section);
    });

    content.appendChild(main);
  };

  const setMenuActive = () => {
    const liMenu = document.getElementById('menu');
    liMenu.classList.add('active');
  };

  return { setMenu, setMenuActive };
})();

export default Menu;