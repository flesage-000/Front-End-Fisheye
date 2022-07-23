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

    return isValid
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

    return isValid
  }

  emailFormat(value) {
    // Remove useless white space
    value = value.trim();

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex = new RegExp(regex);
    let isValid = false;

    isValid = emailRegex.test(value);

    return isValid
  }

  /**
   * Display or remove error message according 'elementIsValid'.
   * @param {object} element
   * @param {boolean} elementIsValid
   * @param {string} validationType
   * @param {string} validationMessage
   */
  errorManager(element, elementIsValid, validationType, validationMessage) {
    const parent = element.parentNode;
    const hasError = parent.querySelector('.' + validationType);
console.log('hasError', parent, hasError, '.' + validationType);
    if (elementIsValid) {
      const errorElement = parent.querySelector('.' + validationType);
      if (errorElement) errorElement.remove();
    } else if (!elementIsValid && !hasError) {
      const $wrapper = document.createElement('span');
      $wrapper.classList.add(validationType);
      $wrapper.innerText = validationMessage;

      parent.appendChild($wrapper);
    }
  }
}