class MediaCard {
  constructor(media) {
    this._media = media;
  }

  createImageCard() {
    const $wrapper = document.createElement('article');
    $wrapper.classList.add('articles__media');
    const mediaCard = `
      <a href="#" title="${this._media.title}, close up view" class="lightboxOpener"><img src="${this._media.image}" class="articles__media__img"></a>
      <span class="articles__media__name">${this._media.title}</span>
      <span class="articles__media__like">
        <span class="articles__media__like__total">${this._media.likes}</span>
        <a href="#" class="articles__media__like__heart" onclick="likes(this)"></a>
      </span>
    `;

    $wrapper.innerHTML = mediaCard;
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
        <a href="#" class="articles__media__like__heart" onclick="likes(this)"></a>
      </span>
    `;

    $wrapper.innerHTML = mediaCard;
    return $wrapper
  }
}