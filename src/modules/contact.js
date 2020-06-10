const Contact = (() => {
  const addForm = () => {
    const form = document.createElement('form');

    const h1 = document.createElement('h1');
    h1.innerText = 'Send us an email';

    const nameField = document.createElement('div');
    nameField.innerHTML = `
      <label for="name">Your Name</label>
      <input type="text" name="name" id="name" required />
    `;

    const emailField = document.createElement('div');
    emailField.innerHTML = `
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
    `;

    const titleField = document.createElement('div');
    titleField.innerHTML = `
      <label for="title">Title</label>
      <input type="text" name="title" id="title" required />
    `;

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.innerText = 'Message';

    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'message');
    textarea.setAttribute('id', 'message');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('required', 'true');

    const formBtn = document.createElement('button');
    formBtn.classList.add('form-btn');
    formBtn.innerText = 'Send';

    form.appendChild(h1);
    form.appendChild(nameField);
    form.appendChild(emailField);
    form.appendChild(titleField);
    form.appendChild(messageLabel);
    form.appendChild(textarea);
    form.appendChild(formBtn);

    return form;
  };

  const addInfoSection = () => {
    const section = document.createElement('section');
    section.classList.add('info-section');

    const openingHoursInfo = document.createElement('div');
    openingHoursInfo.innerHTML = `
      <i class="fas fa-coffee"></i>
      <h3>Opening Hours</h3>
      <p>From 6:00am - 11:00pm</p>
    `;

    const phoneInfo = document.createElement('div');
    phoneInfo.innerHTML = `
      <i class="fas fa-phone"></i>
      <h3>Phone</h3>
      <p>+254-712-345-6788</p>
    `;

    const emailInfo = document.createElement('div');
    emailInfo.innerHTML = `
      <i class="fas fa-envelope"></i>
      <h3>Email</h3>
      <p>enquiry@delirestaurant.cafe</p>
    `;

    const locationInfo = document.createElement('div');
    locationInfo.innerHTML = `
      <i class="fas fa-map-marked-alt"></i>
      <h3>Location</h3>
      <p>Kodhek Road, Nairobi</p>
    `;

    section.appendChild(openingHoursInfo);
    section.appendChild(phoneInfo);
    section.appendChild(emailInfo);
    section.appendChild(locationInfo);

    return section;
  };

  const setContact = () => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('contact-main');

    const form = addForm();
    const section = addInfoSection();

    main.appendChild(form);
    main.appendChild(section);

    content.appendChild(main);
  };

  const setContactActive = () => {
    const liContact = document.getElementById('contact');
    liContact.classList.add('active');
  };

  return { setContact, setContactActive };
})();

export default Contact;