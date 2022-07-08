/**
 * To replace space by '%20'.
 * @param {string} string
 * @returns string
 */
function replaceSpace(string) {
  string = string.trim();
  string = string.replace(' ', '%20');
  return string;
}

/**
 * To get url parameter value
 * @param {string} parameter
 * @returns string
 */
function getUrlParameter(parameter) {
  const url = window.location.search.substring(1);
  const urlVariables = url.split('&');
  let parameterName;

  for (let i = 0; i < urlVariables.length; i++) {
    parameterName = urlVariables[i].split('=');

    if (parameterName[0] === parameter) {
        return parameterName[1] === undefined ? true : decodeURIComponent(parameterName[1]);
    }
  }
  return false;
}

/**
 * Return url pathname
 * @returns string
 */
function getWindowPathName() {// console.log('window.location.pathname', window.location.pathname);
  return window.location.pathname
}