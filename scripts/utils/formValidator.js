class formValidator {
  constructor() {}

  /**
   * To check if value is empty
   * @param {string} value The value of a form element (input, textarea)
   * @returns boolean
   */
  required(value) {
    // Remove useless white space
    value = value.trim();

    const valueLength = value.length;
    let isValid = false;

    if (valueLength >= 1) isValid = true;

    return isValid;
  }

  /**
   * To check value have at least required value length
   * @param {string} value
   * @param {integer} minLengthValue
   * @returns
   */
  minLength(value, minLengthValue) {
    // Remove useless white space
    value = value.trim();

    const valueLength = value.length;
    let isValid = false;

    if (valueLength >= minLengthValue) isValid = true;

    return isValid;
  }

  emailFormat(value) {
    // Remove useless white space
    value = value.trim();

    const regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex = new RegExp(regex);
    let isValid = false;

    isValid = emailRegex.test(value);

    return isValid;
  }

  /**
   * Display or remove error message according "elementIsValid".
   * @param {object} element
   * @param {boolean} elementIsValid
   * @param {string} validationType
   * @param {string} validationMessage
   */
  errorManager(element, elementIsValid, validationType, validationMessage) {
    const parent = element.parentNode;
    const hasError = parent.querySelector("." + validationType);

    if (elementIsValid) {
      const errorElement = parent.querySelector("." + validationType);

      if (errorElement) {
        errorElement.remove();

        const errorStillPresent = parent.querySelectorAll(".error").length;
        if (errorStillPresent == 0) {
          element.setAttribute("aria-invalid", "false");
          element.setAttribute("aria-errormessage", "");
          parent.querySelector("div").remove();
        }
      }

    } else if (!elementIsValid && !hasError) {
      const parentID = parent.querySelector(".form").getAttribute("id");
      const formElement = parent.querySelector(".form");
      const ariaErrorMessageID = parentID + "_errorMessage";
      let $wrapper = parent.querySelector(ariaErrorMessageID) || null;

      if ($wrapper !== null) {
        $wrapper = parent.querySelector("#" + ariaErrorMessageID);
      } else {
        $wrapper = document.createElement("div");
        $wrapper.setAttribute("id", ariaErrorMessageID);
      }

      const $wrapperError = document.createElement("span");

      $wrapperError.classList.add("error");
      $wrapperError.classList.add(validationType);
      $wrapperError.innerText = validationMessage;

      $wrapper.appendChild($wrapperError);
      parent.appendChild($wrapper);
      formElement.setAttribute("aria-error-message", ariaErrorMessageID);
      element.setAttribute("aria-invalid", "true");
    }
  }
}