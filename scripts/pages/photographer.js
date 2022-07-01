async function displayData(data) {
  // console.log('data', data);
  const photographerData = data.photographers;
  const mediaData = data.media;
  const currentId = getUrlParameter('id');
  const photographerCardData = photographerData.find(photographerData => photographerData.id == currentId);

  const photographerHeader = document.querySelector(".photograph__header");

  const photographerModel = photographFactory(photographerCardData);
  const cardDOM = photographerModel.getCardDOM();
  const contactDOM = photographerModel.getContactDOM();
  const pictureDOM = photographerModel.getPictureDOM();

  photographerHeader.appendChild(cardDOM);
  photographerHeader.appendChild(contactDOM);
  photographerHeader.appendChild(pictureDOM);

  const photographerMediaData = mediaData.filter(mediaData => mediaData.photographerId == currentId);
  console.log('photographerMediaData', photographerMediaData, currentId);

  const photographerSection = document.querySelector(".articles");

  photographerMediaData.forEach((photographerMediaData) => {
    const mediaModel = photographFactory(photographerMediaData);
    console.log('photographerArticlesData', photographerCardData, photographerMediaData);
    const articleDOM = mediaModel.getArticlesDOM();
    photographerSection.appendChild(articleDOM);
  });
};

init();
/// {}