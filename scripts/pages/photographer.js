class AppPhotographer {
  constructor(photographerData) {
    this._photographerData = photographerData;

    this._likesCount = 0;
    this._lightbox = new PhotographerLightbox();

    // HTML header
    this.$photographerHeaderWrapper = document.querySelector('.photograph__header');
    // HTML content
    this.$mediaContentWrapper = document.querySelector('.photograph__content');
    // HTML content articles
    this.$mediaWrapper = document.querySelector('.articles');
    // HTML cta
    this.$photographerCtaWrapper = document.querySelector('.cta');
    // HTML lightbox
    this.$lightboxWrapper = document.querySelector('#lightbox .lightbox__viewer');
    // HTML modal form
    this.$modalWrapper = document.querySelector('#contact_modal');
  }

  CreatePhotographer(sortType) {
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

        const contact = new Contact(photographer);
        this.$photographerHeaderWrapper.appendChild(
          contact.button()
        );
        this.$modalWrapper.classList.add('modal', 'modalContact');
        this.$modalWrapper.appendChild(
          contact.form()
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
      .sort(function (a, b) {
        let result = null;
        switch(sortType) {
          case 'popularity':
            result = a.likes - b.likes;
            break;
          case 'title':
            result = a.title.localeCompare(b.title);
            break;
          case 'date':
          default:
            result = new Date(a.date) + new Date(b.date);
            break;
        }
        return result
      })
      .forEach((media, index, array) => {
        media = new Factory(media, 'photographer');

        const MediaTemplate = new MediaCard(media);
        const LightboxTemplate = new PhotographerLightbox(media);

        // Generate HTML according media type
        if (media.image !== null) {
          this.$mediaWrapper.appendChild(
            MediaTemplate.createImageCard(index)
          );
          this.$lightboxWrapper.appendChild(
            LightboxTemplate.createImageLightbox(index)
          );
        } else {
          this.$mediaWrapper.appendChild(
            MediaTemplate.createVideoCard(index)
          );
          this.$lightboxWrapper.appendChild(
            LightboxTemplate.createVideoLightbox(index)
          );
        }

        // lightbox init
        if (index == array.length - 1) {
          LightboxTemplate.lightbox();
        }

        // Likes counter
        this._likesCount += media._likes;
      });

      const dropdownSorter = new DropdownSorter();
      this.$mediaContentWrapper.insertAdjacentElement('afterbegin', dropdownSorter.CreateDropdownSorter());

      // Create likes counter
      const LikesCounter = new PhotographerCta(this._likesCount);
      this.$photographerCtaWrapper.appendChild(
        LikesCounter.createPhotographerCta()
      );
  }
}