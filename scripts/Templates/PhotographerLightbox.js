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
    const lightboxButtons = lightbox.querySelectorAll('a');

    lightboxButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const action = this.dataset.action;

        switch(action) {
          case 'next':
          case 'forward':
            const Navlightbox = new PhotographerLightbox();
            Navlightbox.ManageNextPrevLightbox(lightbox, action);
            break;
          case 'close':
            lightbox.classList.add('close');
            break;
        }
      })
    });
  }

  ManageNextPrevLightbox(lightbox, type) {
    const allMedia = lightbox.querySelectorAll('.lightbox__viewer__media');
    const allMediaLength = allMedia.length;
    const currentMedia = lightbox.querySelector('.lightbox__viewer__media[style^="display"]');
    const currentIndex = currentMedia.dataset.index;
    const nextIndex = getNextIndex(allMediaLength, currentIndex, type);
    currentMedia.style.display = null;

    lightbox.querySelector('[data-index="' + nextIndex + '"]').style.display = 'flex';

    /**
     * Return the next index to display.
     * @param {int} allMediaLength
     * @param {string} currentIndex current index
     * @param {string} type direction of next index 'next' or 'forward'
     * @returns next index to display
     */
    function getNextIndex(allMediaLength, currentIndex, type) {
      let index = null;
      currentIndex = currentIndex * 1; // convert string to number

      switch(type) {
        case 'next':
          if (currentIndex + 1 > allMediaLength - 1) index = 0;
          else index = currentIndex + 1;
        break;
        case 'forward':
          if (currentIndex - 1 < 0) index = allMediaLength - 1;
          else index = currentIndex - 1;
        break
      }
      return index
    }
  }
}