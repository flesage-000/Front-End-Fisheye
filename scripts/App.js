class App  {
  constructor() {
    this.$photographersWrapper = document.querySelector('.photographer_section');
    this.photographerApi = new PhotographerApi();
  }

  async main() {
    const PhotographersData = await this.photographerApi.getPhotographers();

    console.log('PhotographersData', PhotographersData.photographers);
    PhotographersData.photographers.forEach(Photographer => {
      const PhotographerTemplate = new PhotographerCard(Photographer);
    });
  }
}

const app = new App();
app.main();