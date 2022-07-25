class Contact {
  /**
   *
   * @param {object} dataPhotographer photographer JSON data
   */
  constructor(dataPhotographer) {
    this._data = dataPhotographer;
    this.eventsListeners = new eventsListeners();
  }

  /**
   * Create contact button
   * @returns HTML button node
   */
  button() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("photograph__header__contact");
    const button = document.createElement("button");

    button.classList.add("contact_button");
    button.innerText = "Contactez-moi";
    button.setAttribute("aria-label", "Contact Me");

    this.eventsListeners.addListener(
      function () {
        button.addEventListener("click", function() {
          const modal = document.querySelector("#contact_modal");
          modal.style.display = "block";
        });
      }
    );
    this.eventsListeners.ifListener();

    $wrapper.appendChild(button);
    return $wrapper;
  }

  /**
   * Create contact form with form validations
   * @returns HTML contact node
   */
  form() {
    const $wrapper = document.createElement("div");
    const form = `
      <header>
        <h2>Contactez-moi<br><span>${this._data.name}</span></h2>
        <img src="assets/icons/close.svg">
      </header>
      <form novalidate>
        <fieldset>
          <div>
            <label for="contact_lastname">Prénom</label>
            <input type="text" id="contact_lastname" placeholder="Prénom" />
          </div>
          <div>
            <label for="contact_firstname">Nom</label>
            <input type="text" id="contact_firstname" placeholder="Nom" />
          </div>
          <div>
            <label for="contact_email">Email</label>
            <input type="text" id="contact_email" placeholder="Email" />
          </div>
          <div>
            <label for="contact_message">Votre message</label>
            <textarea id="contact_message" placeholder="Votre message"></textarea>
          </div>
        </fieldset>
        <button class="contact_submit" type="submit">Envoyer</button>
      </form>
    `;

    $wrapper.innerHTML = form;
    $wrapper.classList.add("modal__content");

    // message minlenght
    this.eventsListeners.addListener(
      function () {
        const message = $wrapper.querySelector("#contact_message");
        message.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const minLengthValue = 2;
          const minLengthIsValid = _formValidator.minLength(event.target.value, minLengthValue);
          const validationType = "minlength";
          const validationMessage = `${minLengthValue} caractères minimum.`;

          _formValidator.errorManager(event.target, minLengthIsValid, validationType, validationMessage);
        });
      }
    );

    // message required
    this.eventsListeners.addListener(
      function () {
        const message = $wrapper.querySelector("#contact_message");
        message.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const requiredIsValid = _formValidator.required(event.target.value);
          const validationType = "required";
          const validationMessage = "Veuillez complèter le champs.";

          _formValidator.errorManager(event.target, requiredIsValid, validationType, validationMessage);
        });
      }
    );

    // Email input email format
    this.eventsListeners.addListener(
      function () {
        const email = $wrapper.querySelector("#contact_email");
        email.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const requiredIsValid = _formValidator.emailFormat(event.target.value);
          const validationType = "email";
          const validationMessage = "Veuillez entrer une adresse email valide.";

          _formValidator.errorManager(event.target, requiredIsValid, validationType, validationMessage);
        });
      }
    );

    // Email input required
    this.eventsListeners.addListener(
      function () {
        const email = $wrapper.querySelector("#contact_email");
        email.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const requiredIsValid = _formValidator.required(event.target.value);
          const validationType = "required";
          const validationMessage = "Veuillez complèter le champs.";

          _formValidator.errorManager(event.target, requiredIsValid, validationType, validationMessage);
        });
      }
    );

    // Firstname input minlenght
    this.eventsListeners.addListener(
      function () {
        const firstName = $wrapper.querySelector("#contact_firstname");
        firstName.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const minLengthValue = 2;
          const minLengthIsValid = _formValidator.minLength(event.target.value, minLengthValue);
          const validationType = "minlength";
          const validationMessage = `${minLengthValue} caractères minimum.`;

          _formValidator.errorManager(event.target, minLengthIsValid, validationType, validationMessage);
        });
      }
    );

    // Firstname input required
    this.eventsListeners.addListener(
      function () {
        const firstName = $wrapper.querySelector("#contact_firstname");
        firstName.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const requiredIsValid = _formValidator.required(event.target.value);
          const validationType = "required";
          const validationMessage = "Veuillez complèter le champs.";

          _formValidator.errorManager(event.target, requiredIsValid, validationType, validationMessage);
        });
      }
    );

    // Lastname input minlenght
    this.eventsListeners.addListener(
      function () {
        const lastName = $wrapper.querySelector("#contact_lastname");
        lastName.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const minLengthValue = 2;
          const minLengthIsValid = _formValidator.minLength(event.target.value, minLengthValue);
          const validationType = "minlength";
          const validationMessage = `${minLengthValue} caractères minimum.`;

          _formValidator.errorManager(event.target, minLengthIsValid, validationType, validationMessage);
        });
      }
    );

    // Lastname input required
    this.eventsListeners.addListener(
      function () {
        const lastName = $wrapper.querySelector("#contact_lastname");
        lastName.addEventListener("change", event => {
          const _formValidator = new formValidator();

          const requiredIsValid = _formValidator.required(event.target.value);
          const validationType = "required";
          const validationMessage = "Veuillez complèter le champs.";

          _formValidator.errorManager(event.target, requiredIsValid, validationType, validationMessage);
        });
      }
    );

    // form submit
    this.eventsListeners.addListener(
      function() {
        const form = $wrapper.querySelector("form");
        form.addEventListener("submit", event => {
          event.preventDefault();

          const _formValidator = new formValidator();

          // Lastname
          const lastNameNode = form.querySelector("#contact_lastname");
          const lastNameValueIsValid = _formValidator.required(lastNameNode.value);

          const lastNameRequiredErrorMessage = "Veuillez compléter le champs.";
          _formValidator.errorManager(lastNameNode, lastNameValueIsValid, "required", lastNameRequiredErrorMessage);

          const lastNameMinLength = 2;
          const lastNameMinLengthIsValid = _formValidator.minLength(lastNameNode.value, lastNameMinLength);
          const lastNameMinErrorMessage = `${lastNameMinLength} caractères minimum.`;
          _formValidator.errorManager(lastNameNode, lastNameMinLengthIsValid, "minlength", lastNameMinErrorMessage);

          // Firstname
          const firstNameNode = form.querySelector("#contact_firstname");

          const firstNameIsValid = _formValidator.required(firstNameNode.value);
          const firstNameRequiredErrorMessage = "Veuillez compléter le champs.";
          _formValidator.errorManager(firstNameNode, firstNameIsValid, "required", firstNameRequiredErrorMessage);

          const firstNameMinLength = 2;
          const firstNameMinLengthIsValid = _formValidator.minLength(firstNameNode.value, firstNameMinLength);
          const firstNameMinLengthErrorMessage = `${firstNameMinLength} caractères minimum.`;
          _formValidator.errorManager(firstNameNode, firstNameMinLengthIsValid, "minlength", firstNameMinLengthErrorMessage);

          // Email
          const emailNode = form.querySelector("#contact_email");

          const emailRequiredIsValid = _formValidator.required(emailNode.value);
          const emailRequiredErrorMessage = "Veuillez compléter le champs.";
          _formValidator.errorManager(emailNode, emailRequiredIsValid, "required", emailRequiredErrorMessage);

          const emailFormatIsValid = _formValidator.emailFormat(emailNode.value);
          const emailValidErrorMessage ="Veuillez entrer un email valide.";
          _formValidator.errorManager(emailNode, emailFormatIsValid, "email", emailValidErrorMessage);

          // Message
          const messageNode = form.querySelector("#contact_message");

          const messageRequiredIsValid = _formValidator.required(messageNode.value);
          const messageRequiredErrorMessage = "Veuillez compléter le champs.";
          _formValidator.errorManager(messageNode, messageRequiredIsValid, "required", messageRequiredErrorMessage);

          const messageMinLength = 2;
          const messageMinLengthIsValid = _formValidator.minLength(messageNode.value, messageMinLength);
          const messageMinErrorMessage = `${messageMinLength} caractères minimum.`;
          _formValidator.errorManager(messageNode, messageMinLengthIsValid, "minlength", messageMinErrorMessage);

          if (lastNameValueIsValid && lastNameMinLengthIsValid && firstNameIsValid && firstNameMinLengthIsValid && emailRequiredIsValid && emailFormatIsValid && messageRequiredIsValid && messageMinLengthIsValid) {
            console.log("form is valid");
          } else {
            console.log("form NOT valid");
          }
        });
      }
    );

    // Close button
    this.eventsListeners.addListener(
      function () {
        const closeButton = $wrapper.querySelector("header img");
        closeButton.addEventListener("click", function() {
          const modal = document.querySelector("#contact_modal");
          modal.style.display = "none";
        });
      }
    );
    this.eventsListeners.ifListener();

    return $wrapper;
  }
}