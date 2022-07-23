class Likes {
  constructor() {}

  /**
   * To increase like counters
   * @param {object} event An event
   */
  increase(event) {
    // Increase media's likes counter
    const mediaLikesContainer = event.target.parentNode;
    const mediaLikesCounter = mediaLikesContainer.querySelector('.articles__media__like__total');
    const mediaLikesCount = mediaLikesCounter.innerText * 1 + 1;
    mediaLikesCounter.innerText = mediaLikesCount;

    // Increase photographer's likes counter
    const photographerLikesContainer = document.querySelector('.cta__counter__count');
    const photographerLikesCount = photographerLikesContainer.innerText * 1 + 1;
    photographerLikesContainer.innerText = photographerLikesCount;

  }
}