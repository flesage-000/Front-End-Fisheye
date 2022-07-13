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
    const emailRegex = "^[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    const form = `
      <header>
        <h2>Contactez-moi<br><span>${this._data.name}</span></h2>
        <img src="assets/icons/close.svg">
      </header>
      <form novalidate>
        <fieldset>
          <div>
            <label for="contact_lastname">Prénom</label>
            <input type="text" id="contact_lastname" placeholder="Prénom" minlength="2">
          </div>
          <div>
            <label for="contact_firstname">Nom</label>
            <input type="text" id="contact_firstname" placeholder="Nom" minlength="2">
          </div>
          <div>
            <label for="contact_email">Email</label>
            <input type="email" id="contact_email" placeholder="Email" pattern="${emailRegex}">
          </div>
          <div>
            <label for="contact_email">Votre message</label>
            <textarea id="contact_email" placeholder="Votre message"></textarea>
          </div>
        </fieldset>
      </form>
      <button class="contact_submit">Envoyer</button>
    `;

    console.log('this._contactFormData', this._contactFormData);

    $wrapper.innerHTML = form;
    $wrapper.classList.add('modal__content');

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

  thanks() {}
}