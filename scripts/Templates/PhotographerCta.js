/**
 * Template of cta part like"s total and photographer price
 */
class PhotographerCta {
  /**
   *
   * @param {object} data Photographer JSON data
   */
  constructor(data) {
    this._data = data;
  }

  /**
   *
   * @returns HTML node
   */
  createPhotographerCta() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("cta__counter");

    const photographerCounter = `
      <div class="cta__counter">
        <span class="cta__counter__count">${this._data}</span>
        <span class="cta__counter__heart"></span>
      </div>
    `;

    $wrapper.innerHTML = photographerCounter;
    return $wrapper;
  }

  /**
   *
   * @returns HTML node
   */
  createPhotographerPrice() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("cta__price");

    const photographerPrice = this._data.price;

    $wrapper.innerText = photographerPrice;
    return $wrapper;
  }
}