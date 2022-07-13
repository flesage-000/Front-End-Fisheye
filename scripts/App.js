class App  {
  constructor(page) {
    this.photographerApi = new PhotographerApi();
    this._page = page;
  }

  async main() {
    const PhotographersData = await this.photographerApi.getPhotographers();

    switch(this._page) {
      case 'index':
        const appIndex = new AppIndex(PhotographersData);
        appIndex.CreateIndex();
        break;

      case 'photographer':
        const ContactFormData = await this.photographerApi.getContactFormParam();
        const appPhotographer = new AppPhotographer(PhotographersData, ContactFormData);
        appPhotographer.CreatePhotographer('');
        break;
    }
  }
}