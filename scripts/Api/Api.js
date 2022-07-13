class Api  {
  constructor() {
    this._urlPhotographer = 'https://flesage-000.github.io/Front-End-Fisheye/data/photographers.json';
    this._urlContactForm = 'https://flesage-000.github.io/Front-End-Fisheye//data/contactFormData.json';
  }

  async get(url) {
    return fetch(url)
            .then(res => res.json())
            .catch(error => console.log('an error occurs', error));
  }
}

class PhotographerApi extends Api {
  /**
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    return await this.get(this._urlPhotographer);
  }

  async getContactFormParam() {
    return await this.get(this._urlContactForm);
  }
}