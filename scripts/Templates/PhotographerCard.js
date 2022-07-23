/**
 * Template of hotographer cards
 */
class PhotographerCard {
  /**
   *
   * @param {object} photographer Photographer JSON data
   */
  constructor(photographer) {
    this._photographer = photographer;
  }

  /**
   *
   * @returns HTML node
   */
  createPhotographerCard() {
    const $wrapper = document.createElement('article');

    const photographerCard = `
      <a href="photographer.html?id=${this._photographer.id}" title="${this._photographer.name}">
        <img src="${this._photographer.portrait}" alt="">
        <h2>${this._photographer.name}</h2>
      </a>
      <address>
        <span>${this._photographer.city}, ${this._photographer.country}<span>
      </address>
      <p>${this._photographer.tagline}</p>
      <span>${this._photographer.price}</span>
    `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper
  }
}