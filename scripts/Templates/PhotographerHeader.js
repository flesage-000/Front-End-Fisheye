class PhotographerHeader {
  constructor(data) {
    this._data = data;
  }

  createPhotographerHeaderCard() {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photograph__header__card');

    const photographerCard = `
      <h1 class="name">${this._data.name}</h1>
      <address class="location">
        <span>${this._data.city}, ${this._data.country}</span>
      </address>
      <p class="tagline">
        ${this._data.tagline}
      </p>
    `;

    $wrapper.innerHTML = photographerCard;

    return $wrapper
  }

  createPhotographerHeaderContact() {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photograph__header__contact');

    const photographerContact = `
      <button class="contact_button" onclick="displayModal()" aria-label="Contact Me">Contactez-moi</button>
    `;

    $wrapper.innerHTML = photographerContact;

    return $wrapper
  }

  createPhotographerHeaderPicture() {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photograph__header__picture');

    const photographerPicture = `
      <img src="${this._data.portrait}" alt="${this._data.name}">
    `;

    $wrapper.innerHTML = photographerPicture;

    return $wrapper
  }
}