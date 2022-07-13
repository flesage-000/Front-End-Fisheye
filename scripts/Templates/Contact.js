class Contact {
  constructor(dataPhotographer, dataContactForm) {
    this._data = dataPhotographer;
    this._contactFormData = dataContactForm;
    this.eventsListeners = new eventsListeners();
  }

  button() {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photograph__header__contact');
    const button = document.createElement('button');

    button.classList.add('contact_button');
    button.innerText = 'Contactez-moi';
    button.setAttribute('aria-label', 'Contact Me');

    this.eventsListeners.addListener(
      function () {
        button.addEventListener('click', function() {
          const modal = document.querySelector('#contact_modal');
          modal.style.display = 'block';
        });
      }
    );
    this.eventsListeners.ifListener();

    $wrapper.appendChild(button);
    return $wrapper
  }

  form() {
    const $wrapper = document.createElement('div');
    const fieldset = document.createElement('fieldset');
    const form = `
      <header>
        <h2>Contactez-moi<br><span>${this._data.name}</span></h2>
        <img src="assets/icons/close.svg">
      </header>
      <form novalidate></form>
      <button class="contact_submit">Envoyer</button>
    `;

    this._contactFormData.forEach(input => {
      const _inputBuilder = new inputBuilder(input);
      const $wrapper = _inputBuilder.init();
      console.log('$wrapper', $wrapper)
      fieldset.appendChild($wrapper);
    });

    $wrapper.innerHTML = form;
    $wrapper.classList.add('modal__content');

    $wrapper.querySelector('form').appendChild(fieldset);

    this.eventsListeners.addListener(
      function () {
        const closeButton = $wrapper.querySelector('header img');
        closeButton.addEventListener('click', function() {
          const modal = document.querySelector('#contact_modal');
          modal.style.display = 'none';
        });
      }
    );
    this.eventsListeners.ifListener();

    return $wrapper
  }
}