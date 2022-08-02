class MediaCard {
  /**
   *
   * @param {object} media photographer JSON data
   */
  constructor(media) {
    this._media = media;

    this.eventsListeners = new eventsListeners();
    this._contact = new Contact();
  }

  /**
   *  Create media card HTML node for media image
   * @param {number} index The media index number
   * @returns
   */
  createImageCard(index) {
    const $wrapper = document.createElement("article");
    const mediaCard = `
      <a href="#" title="${this._media.title}, close up view" class="lightboxOpener"><img src="${this._media.image}" class="articles__media__img" alt="${this._media.title}, close up view" title="${this._media.title}, close up view"></a>
      <span class="articles__media__name">${this._media.title}</span>
      <span class="articles__media__like">
        <span class="articles__media__like__total">${this._media.likes}</span>
        <button class="articles__media__like__heart" aria-label="Cliquer pour aimer ce média."></button>
      </span>
    `;

    $wrapper.innerHTML = mediaCard;
    $wrapper.classList.add("articles__media");
    $wrapper.setAttribute("data-index", index);

    // Add listeners
    this.commonEvents($wrapper);
    this.eventsListeners.ifListener();

    return $wrapper;
  }

  /**
   *  Create media card HTML node for media video
   * @param {number} index The media index number
   * @returns
   */
  createVideoCard(index) {
    const $wrapper = document.createElement("article");
    const mediaCard = `
      <a href="#" title="${this._media.title}, close up view" class="lightboxOpener"><video class="articles__media__img">
        <source src="${this._media.video}" type="video/mp4">
        Sorry, your browser doesn"t support embedded videos.
      </video></a>
      <span class="articles__media__name">${this._media.title}</span>
      <span class="articles__media__like">
        <span class="articles__media__like__total">${this._media.likes}</span>
        <button class="articles__media__like__heart" aria-label="Cliquer pour aimer ce média."></button>
      </span>
    `;

    $wrapper.innerHTML = mediaCard;
    $wrapper.classList.add("articles__media");
    $wrapper.setAttribute("data-index", index);

    // Add listeners
    this.commonEvents($wrapper);
    this.eventsListeners.ifListener();

    return $wrapper;
  }

  /**
   * Add like click events
   * @param {object} $wrapper
   */
  commonEvents($wrapper) {

    // Manage likes
    this.eventsListeners.addListener(
      function() {
        const element = $wrapper.querySelector(".articles__media__like__heart");

        element.addEventListener("click", function(event) {
          event.preventDefault();

          const likes = new Likes();
          likes.increase(event);
        });
      }
    );

    // Manage lightbox open
    this.eventsListeners.addListener(
      function() {
        const element = $wrapper.querySelector(".lightboxOpener");

        element.addEventListener("click", function(event) {
          event.preventDefault();

          const articlesContainer = event.target.closest(".articles__media");
          const index = articlesContainer.dataset.index;
          const lightboxContainer = document.querySelector("#lightbox");

          lightboxContainer.setAttribute("aria-hidden", "false");
          document.querySelector("#main").setAttribute("aria-hidden", "true");

          const currentMediaIndex = lightboxContainer.querySelector("[data-index=\"" + index + "\"]");
          currentMediaIndex.style.display = "flex";
          currentMediaIndex.setAttribute("aria-hidden", "false");
          lightboxContainer.classList.remove("close");
          lightboxContainer.querySelector(".lightbox__controller__closer button").setAttribute("data-index", index);

          lightboxContainer.querySelector(".lightbox__controller__next button").focus();
        });
      }
    );
  }
}