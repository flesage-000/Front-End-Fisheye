class Api  {
  constructor() {
    this._url = 'https://flesage-000.github.io/Front-End-Fisheye/data/photographers.json';
  }

  async get() {
    return fetch(this._url)
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
    return await this.get();
  }
}