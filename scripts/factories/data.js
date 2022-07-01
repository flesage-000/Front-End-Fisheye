/**
 * Load JSON
 * @returns
 */
async function getPhotographers() {

  const response = await fetch('https://flesage-000.github.io/Front-End-Fisheye/data/photographers.json');

  const json = await response.json();

  return ({photographers: json})
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
};