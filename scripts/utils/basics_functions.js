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