/**
 * Manage medias lightbox
 */
class PhotographerLightbox {
  /**
   *
   * @param {object} data Media JSON data
   */
  constructor(data) {
    this._data = data;
    this.eventsListeners = new eventsListeners();
  }

  /**
   * Template for media image
   * @param {number} index
   * @returns HTML node
   */
  createImageLightbox(index) {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("lightbox__viewer__media");
    $wrapper.setAttribute("data-index", index);
    $wrapper.setAttribute("aria-hidden", "true");

    const image = `
      <img src="${this._data.image}" alt="Média ${this._data.title}" title="Média ${this._data.title}">
    `;

    $wrapper.innerHTML = image;

    return $wrapper;
  }

  /**
   * Template for media video
   * @param {number} index
   * @returns HTML node
   */
  createVideoLightbox(index) {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("lightbox__viewer__media");
    $wrapper.setAttribute("data-index", index);
    $wrapper.setAttribute("aria-hidden", "true");

    const video = `
      <video controls width="250">
        <source src="${this._data.video}" type="video/mp4">
        Sorry, your browser doesn"t support embedded videos.
      </video>
    `;

    $wrapper.innerHTML = video;

    return $wrapper;
  }

  /**
   * Add eventlistener for lightbox
   */
  lightbox() {
    const lightbox = document.querySelector("#lightbox");
    const lightboxButtons = lightbox.querySelectorAll("button");

    // Events for clicks
    lightboxButtons.forEach(button => {
      this.eventsListeners.addListener(
        button.addEventListener("click", function(event) {
          event.preventDefault();
          const action = this.dataset.action;

          switch(action) {
            case "next":
            case "forward": {
              const Navlightbox = new PhotographerLightbox();
              Navlightbox.ManageNextPrevLightbox(lightbox, action);
              break;
            }
            case "close": {
              lightbox.classList.add("close");
              const ariaHiddenFalses = lightbox.querySelectorAll(".lightbox__viewer__media[aria-hidden^=\"false\"]")
              ariaHiddenFalses.forEach(element => {
                element.setAttribute("aria-hidden", "true");
                element.style.display = null;
              });

              const mediaToFocusOnClose = lightbox.querySelector(".lightbox__controller__closer button").getAttribute("data-index");

              document.querySelector("article[data-index=\"" + mediaToFocusOnClose + "\"] a").focus();
              break;
            }
          }
        })
      );
    });

    // Event for keys
    this.eventsListeners.addListener(
      window.addEventListener("keydown", function(event) {
        const eventCode = event.code;

        if (lightbox.classList.contains("close") || eventCode === "Tab") {
          return;
        }

        event.preventDefault();

        let action = null;

        if (eventCode === "ArrowLeft") {
          action = "forward";
        } else if (eventCode === "ArrowRight") {
          action = "next";
        } else if (eventCode === "Escape") {
          action = "close";
        }

        switch(action) {
          case "next":
          case "forward": {
            const Navlightbox = new PhotographerLightbox();
            Navlightbox.ManageNextPrevLightbox(lightbox, action);
            break;
          }
          case "close": {
            lightbox.classList.add("close");
            lightbox.querySelector(".lightbox__viewer__media[aria-hidden^=\"false\"]").setAttribute("aria-hidden", "true");

            const mediaToFocusOnClose = lightbox.querySelector(".lightbox__controller__closer button").getAttribute("data-index");

            document.querySelector("article[data-index=\"" + mediaToFocusOnClose + "\"] a").focus();

            // to avoid display of 2 media in case of lightbox is reopened, we need to hide displayed media
            lightbox.querySelector(".lightbox__viewer__media[style^=\"display\"]").style.display = null;
            break;
          }
        }
      })
    );

  }

  /**
   * Manage user event on lightbox
   * @param {object} lightbox Lightbox HTML node
   * @param {string} action The user action on lightbox (next, prev, close)
   */
  ManageNextPrevLightbox(lightbox, action) {
    const allMedia = lightbox.querySelectorAll(".lightbox__viewer__media");
    const allMediaLength = allMedia.length;
    const currentMedia = lightbox.querySelector(".lightbox__viewer__media[style^=\"display\"]");
    const currentIndex = currentMedia.dataset.index;
    const nextIndex = getNextIndex(allMediaLength, currentIndex, action);

    currentMedia.style.display = null;
    currentMedia.setAttribute("aria-hidden", "true");

    const nextMediaNode = lightbox.querySelector("[data-index=\"" + nextIndex + "\"]");
    nextMediaNode.style.display = "flex";
    nextMediaNode.setAttribute("aria-hidden", "false");

    /**
     * Return the next index to display.
     * @param {int} allMediaLength
     * @param {string} currentIndex current index
     * @param {string} type direction of next index "next" or "forward"
     * @returns next index to display
     */
    function getNextIndex(allMediaLength, currentIndex, action) {
      let index = null;
      currentIndex = currentIndex * 1; // convert string to number

      switch(action) {
        case "next":
          if (currentIndex + 1 > allMediaLength - 1) index = 0;
          else index = currentIndex + 1;
        break;
        case "forward":
          if (currentIndex - 1 < 0) index = allMediaLength - 1;
          else index = currentIndex - 1;
        break;
      }
      return index;
    }
  }
}