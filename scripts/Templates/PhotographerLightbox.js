class PhotographerLightbox {
  constructor(data) {
    this._data = data;
    this.eventsListeners = new eventsListeners();
  }

  createImageLightbox(index) {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('lightbox__viewer__media');
    $wrapper.setAttribute('data-index', index);
    const image = `
      <img src="${this._data.image}">
    `;

    $wrapper.innerHTML = image;

    return $wrapper
  }

  createVideoLightbox(index) {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('lightbox__viewer__media');
    $wrapper.setAttribute('data-index', index);

    const video = `
      <video controls width="250">
        <source src="${this._data.video}" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    `;

    $wrapper.innerHTML = video;

    return $wrapper
  }

  lightbox() {
    const lightbox = document.querySelector('#lightbox');
    const lightboxClose = lightbox.querySelector('.lightbox__controller__closer');
    const lightboxForward = lightbox.querySelector('.lightbox__controller__forward');
    const lightboxNext = lightbox.querySelector('.lightbox__controller__next');

    /**
     * Lightbox forward media
    */
    lightboxForward.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      console.log('FORWARD CLICKED');
    });

    /**
     * Lightbox next media
    */
    lightboxNext.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      console.log('NEXT CLICKED');
    });

    /**
    * Lightbox closer
    */
    lightboxClose.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      lightbox.classList.add('close');
    });
  }
}