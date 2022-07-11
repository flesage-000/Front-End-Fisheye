class MediaCard {
  constructor(media) {
    this._media = media;
    this.eventsListeners = new eventsListeners();
  }

  createImageCard() {
    const $wrapper = document.createElement('article');
    $wrapper.classList.add('articles__media');
    const mediaCard = `
      <a href="#" title="${this._media.title}, close up view" class="lightboxOpener"><img src="${this._media.image}" class="articles__media__img"></a>
      <span class="articles__media__name">${this._media.title}</span>
      <span class="articles__media__like">
        <span class="articles__media__like__total">${this._media.likes}</span>
        <a href="#" class="articles__media__like__heart"></a>
      </span>
    `;

    $wrapper.innerHTML = mediaCard;

    this.commonEvents($wrapper);

    // Add listeners
    this.eventsListeners.ifListener();

    return $wrapper
  }

  createVideoCard() {
    const $wrapper = document.createElement('article');
    $wrapper.classList.add('articles__media');
    const mediaCard = `
      <a href="#" title="${this._media.title}, close up view" class="lightboxOpener"><video class="articles__media__img">
        <source src="${this._media.video}"
                type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video></a>
      <span class="articles__media__name">${this._media.title}</span>
      <span class="articles__media__like">
        <span class="articles__media__like__total">${this._media.likes}</span>
        <a href="#" class="articles__media__like__heart"></a>
      </span>
    `;

    $wrapper.innerHTML = mediaCard;

    this.commonEvents($wrapper);
    // Add listeners
    this.eventsListeners.ifListener();

    return $wrapper
  }

  commonEvents($wrapper) {
    this.eventsListeners.addListener(
      function() {
        const element = $wrapper.querySelector('.articles__media__like__heart');

        element.addEventListener('click', function(event) {
          event.preventDefault();

          const likes = new Likes()
          likes.increase(event)
        });
      }
    );
  }
}