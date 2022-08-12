class AppPhotographer {
  /**
   *
   * @param {object} photographerData photographer JSON data
   */
  constructor(photographerData) {
    this._photographerData = photographerData;

    this._likesCount = 0;
    this._lightbox = new PhotographerLightbox();

    // HTML header
    this.$photographerHeaderWrapper = document.querySelector(".photograph__header");
    // HTML content
    this.$mediaContentWrapper = document.querySelector(".photograph__content");
    // HTML content articles
    this.$mediaWrapper = document.querySelector(".articles");
    // HTML cta
    this.$photographerCtaWrapper = document.querySelector(".cta");
    // HTML lightbox
    this.$lightboxWrapper = document.querySelector("#lightbox .lightbox__viewer");
    // HTML modal form
    this.$modalWrapper = document.querySelector("#contact_modal");

    this.photographerID = getUrlParameter("id");
    this.mediaPhotographer = this._photographerData.media.filter(
      media => {return media.photographerId == this.photographerID;}
    );
  }

  /**
   * Generate the photographer page
   * @param {string} sortType
   */
  CreatePhotographer(sortType) {

    this.headerPhotographer();
    this.contentPhotographer(sortType, true, this.mediaPhotographer);

    const dropdownSorter = new DropdownSorter();
    const dropdownElement = dropdownSorter.CreateDropdownSorter();
    this.$mediaContentWrapper.insertAdjacentElement("afterbegin", dropdownElement);

    this.dropdownEvent(dropdownElement);

    // Create likes counter
    const LikesCounter = new PhotographerCta(this._likesCount);
    this.$photographerCtaWrapper.appendChild(
      LikesCounter.createPhotographerCta()
    );
  }

  /**
   * Generate the header of photographer page
   */
  headerPhotographer() {
    const photographerID = getUrlParameter("id");

    // Create header
    this._photographerData.photographers
      .filter(function(photographer) {
        // Get data from photographer ID
        return photographer.id == photographerID;
      })
      .forEach(photographer => {
        photographer = new Factory(photographer, "photographerHeader");

        const photographerCard = new PhotographerHeader(photographer);
        this.$photographerHeaderWrapper.appendChild(
          photographerCard.createPhotographerHeaderCard()
        );

        const contact = new Contact(photographer);
        this.$photographerHeaderWrapper.appendChild(
          contact.button()
        );
        this.$modalWrapper.classList.add("modal", "modalContact");
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
  }

  /**
   * Generate the content of photographer page
   * @param {string} sortType
   */
  contentPhotographer(sortType, reloadLightBox, mediaPhotographer) {
    // Because content can be sorted we arbitrary remove content from container AND the lightbox
    document.querySelector(".photograph__content > .articles").innerHTML = "";
    document.querySelector(".lightbox__viewer").innerHTML = "";

    // Create cards
    mediaPhotographer
      .sort(function (a, b) {
        let result = null;
        switch(sortType) {
          case "popularity":
            result = b.likes * 1 - a.likes * 1;
            break;
          case "title":
            result = a.title.localeCompare(b.title);
            break;
          case "date":
          default:
            result = new Date(a.date) + new Date(b.date);
            break;
        }
        return result;
      })
      .forEach((media, index, array) => {
        media = new Factory(media, "photographer");

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
        if (index == array.length - 1 && reloadLightBox) {
          LightboxTemplate.lightbox();
        }
        // likes init
        if (index == array.length - 1) {
          this.likeEvent(mediaPhotographer);
        }

        // Likes counter
        this._likesCount += media._likes;
      });
  }

  /**
   * The dropdown event
   * @param {object} dropdownElement
   */
  dropdownEvent(dropdownContainer) {
    const dropdownElement = dropdownContainer.querySelector(".dropdown");
    dropdownElement.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const element = event.target;
      const parentElement = element.parentNode;
      let parentElementClassList = parentElement.classList;

      if (parentElementClassList.contains("expanded")) { // Click on element of sorter
        const input = document.getElementById(element.getAttribute("for"));
        const inputValue = input.value;
        input.checked = true;

        this.contentPhotographer(inputValue, false, this.mediaPhotographer);
      }

      parentElement.classList.toggle("expanded");
    });
  }

  likeEvent(mediaPhotographer) {
    const likesButtons = document.querySelectorAll(".articles__media__like__heart");
    likesButtons.forEach(element => {
      const addLike = (event) => {
        const parentNode = event.target.parentNode;
        const likesNode = parentNode.querySelector(".articles__media__like__total");
        likesNode.innerText =  likesNode.innerText * 1 + 1;
        // event.target.innerHTML += 1;

        const parentArticle = event.target.closest(".articles__media");
        const index = parentArticle.dataset.index;
        mediaPhotographer[index].likes += 1;

        const likesGlobalNode = document.querySelector(".cta__counter__count")
        likesGlobalNode.innerText = likesGlobalNode.innerText * 1 + 1;

      };
      element.addEventListener('click', addLike, false);
      element.addEventListener('keydown', addLike, false);

    });
  }
}