class App  {
  constructor(pathname) {
    this.$photographersWrapper = document.querySelector('.photographer_section');
    this.$photographerHeaderWrapper = document.querySelector('.photograph__header');
    this.$mediaWrapper = document.querySelector('.articles');
    this.$photographerCtaWrapper = document.querySelector('.cta');
    this.$lightboxWrapper = document.querySelector('#lightbox .lightbox__viewer');

    this.photographerApi = new PhotographerApi();
    this._pathname = pathname;

    this._likesCount = 0;
    this._photographerPrice = 0;
  }

  async main() {
    const PhotographersData = await this.photographerApi.getPhotographers();

    // console.log('PhotographersData', PhotographersData.media, this._pathname);

    if (this._pathname === '/index.html') {
      PhotographersData.photographers
        .map(photographer => new Factory(photographer, this._pathname))
        .forEach(Photographer => {
          const PhotographerTemplate = new PhotographerCard(Photographer);

          this.$photographersWrapper.appendChild(
            PhotographerTemplate.createPhotographerCard()
          )
        });
    } else if (this._pathname === '/photographer.html') { // /photographer.html?id=INTEGER
      const currentId = getUrlParameter('id');

      PhotographersData.photographers
        .filter(function(photographer) {
          return photographer.id == currentId
        })
        .map(photographer => new Factory(photographer, 'photographerHeader'))
        .forEach(Photographer => {
          const photographerCard = new PhotographerHeader(Photographer);
          this.$photographerHeaderWrapper.appendChild(
            photographerCard.createPhotographerHeaderCard()
          );

          const photographerContact = new PhotographerHeader(Photographer);
          this.$photographerHeaderWrapper.appendChild(
            photographerContact.createPhotographerHeaderContact()
          );

          const photographerPicture = new PhotographerHeader(Photographer);
          this.$photographerHeaderWrapper.appendChild(
            photographerPicture.createPhotographerHeaderPicture()
          );

          const photographerCta = new PhotographerCta(Photographer);

          this.$photographerCtaWrapper.appendChild(
            photographerCta.createPhotographerPrice()
          );
        });

      // Add media to photographer page
      PhotographersData.media
        .filter(function(media) {
          return media.photographerId == currentId
        })
        .map(media => new Factory(media, this._pathname))
        .forEach((media, index, array) => {
          // Media cards builder
          const MediaTemplate = new MediaCard(media);
          const LightboxTemplate = new PhotographerLightbox(media);
          if (media.image !== null) {
            this.$mediaWrapper.appendChild(
              MediaTemplate.createImageCard()
            );
            this.$lightboxWrapper.appendChild(
              LightboxTemplate.createImageLightbox()
            );
          } else {
            this.$mediaWrapper.appendChild(
              MediaTemplate.createVideoCard()
            );
            this.$lightboxWrapper.appendChild(
              LightboxTemplate.createVideoLightbox()
            );
          }

          // lightbox init
          if (index == array.length - 1) {
            console.log('index', index);
            LightboxTemplate.lightbox();
          }

          // Likes counter
          this._likesCount += media._likes;
        });

      const LikesCounter = new PhotographerCta(this._likesCount);
      this.$photographerCtaWrapper.appendChild(
        LikesCounter.createPhotographerCta()
      );
    }
  }
}
const pathname = getWindowPathName();
const app = new App(pathname);
app.main();