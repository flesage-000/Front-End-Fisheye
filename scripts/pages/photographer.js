class AppPhotographer {
  constructor(photographerData) {
    this._photographerData = photographerData;

    this._likesCount = 0;
    this._lightbox = new PhotographerLightbox();

    // HTML header
    this.$photographerHeaderWrapper = document.querySelector('.photograph__header');
    // HTML content
    this.$mediaWrapper = document.querySelector('.articles');
    // HTML cta
    this.$photographerCtaWrapper = document.querySelector('.cta');
    // HTML lightbox
    this.$lightboxWrapper = document.querySelector('#lightbox .lightbox__viewer');
  }

  CreatePhotographer() {
    const photographerID = getUrlParameter('id');

    // Create header
    this._photographerData.photographers
      .filter(function(photographer) {
        // Get data from photographer ID
        return photographer.id == photographerID
      })
      .forEach(photographer => {
        photographer = new Factory(photographer, 'photographerHeader');

        const photographerCard = new PhotographerHeader(photographer);
        this.$photographerHeaderWrapper.appendChild(
          photographerCard.createPhotographerHeaderCard()
        );

        const photographerContact = new PhotographerHeader(photographer);
        this.$photographerHeaderWrapper.appendChild(
          photographerContact.createPhotographerHeaderContact()
        );

        const photographerPicture = new PhotographerHeader(photographer);
        this.$photographerHeaderWrapper.appendChild(
          photographerPicture.createPhotographerHeaderPicture()
        );

        const photographerCta = new PhotographerCta(photographer);
        this.$photographerCtaWrapper.appendChild(
          photographerCta.createPhotographerPrice()
        );
      });

    // Create cards
    this._photographerData.media
      .filter(function(media) {
        // Get data from photographer ID
        return media.photographerId == photographerID
      })
      .forEach((media, index, array) => {
        media = new Factory(media, 'photographer');

        const MediaTemplate = new MediaCard(media);
        const LightboxTemplate = new PhotographerLightbox(media);

        // Generate HTML according media type
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

        // MediaTemplate.setEvent(function() {
        //   console.log('setEvent');
        // });

        // lightbox init
        if (index == array.length - 1) {
          LightboxTemplate.lightbox();
        }

        // Likes counter
        this._likesCount += media._likes;
      });

      // Create likes counter
      const LikesCounter = new PhotographerCta(this._likesCount);
      this.$photographerCtaWrapper.appendChild(
        LikesCounter.createPhotographerCta()
      );
  }
}