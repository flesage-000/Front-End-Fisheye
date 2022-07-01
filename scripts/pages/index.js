async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  console.log('photographers', photographers);

  photographers.photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

init();
/// {}