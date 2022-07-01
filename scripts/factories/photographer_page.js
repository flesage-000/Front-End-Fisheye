function photographFactory(data) {
    const { name, city, country, date, id, image, likes, photographerId, portrait, price, tagline, title } = data;
    console.log('data', data);
    // name = replaceSpace(name);
    const pictureUrl = `assets/photographers/${photographerId}/`;
    const illustrationUrl = `assets/photographers/Photographers ID Photos/`;

    function getCardDOM() {
        // Card
        const   photographCard = document.createElement('div');
                photographCard.classList.add('photograph__header__card');

        const   photographH1 = document.createElement('h1');
                photographH1.classList.add('name');
                photographH1.textContent = name;

        const   photographAddress = document.createElement('address');
                photographAddress.classList.add('location');

        const   photographSpan = document.createElement('span');
                photographAddress.appendChild(photographSpan);
                photographSpan.textContent = city + ', ' + country;

        const   photographTagline = document.createElement('p');
                photographTagline.classList.add('tagline');
                photographTagline.textContent = tagline;

        photographCard.appendChild(photographH1)
        photographCard.appendChild(photographAddress)
        photographCard.appendChild(photographTagline);

        return (photographCard);
    }

    function getContactDOM() {

        // Contact
        const   photographContact = document.createElement('div');
                photographContact.classList.add('photograph__header__contact');

        const   photographButton = document.createElement('button');
                photographButton.classList.add('contact_button');
                photographButton.setAttribute('onclick', 'displayModal()');
                photographButton.textContent = 'Contactez-moi';

        photographContact.appendChild(photographButton);

        return (photographContact);
    }

    function getPictureDOM() {
        // Picture
        const   photographPicture = document.createElement('div');
                photographPicture.classList.add('photograph__header__picture');

        const   photographIllustration = document.createElement('img');
        const   photographSrc = replaceSpace(illustrationUrl + portrait);
                photographIllustration.setAttribute('src', photographSrc);

        photographPicture.appendChild(photographIllustration);

        return (photographPicture);
    }

    function getArticlesDOM() {
        // Articles
        const   photographArticle = document.createElement('article');
        photographArticle.classList.add('articles__media');

        if (image) {
                const   photographArticleIllustration = document.createElement('img');
                const   photographArticleSrc = replaceSpace(pictureUrl + image);
                        photographArticleIllustration.setAttribute('src', photographArticleSrc);
                        photographArticleIllustration.classList.add('articles__media__img');
        } else {
                // const   photographArticleIllustration = document.createElement('video');
                // const   photographArticleIllustrationSource = document.createElement('source');
                // const   photographArticleIllustrationSourceSrc = replaceSpace(pictureUrl + video);
                //         photographArticleIllustrationSourceSrc.setAttribute('src', photographArticleSrc);
                //         photographArticleIllustration.classList.add('articles__media__img');
        }

        const   photographArticleName = document.createElement('span');
                photographArticleName.classList.add('articles__media__name');
                photographArticleName.textContent = title;

        const   photographArticleLike = document.createElement('span');
                photographArticleLike.classList.add('articles__media__like');
        const   photographArticleLikeTotal = document.createElement('span');
                photographArticleLikeTotal.classList.add('articles__media__like__total');
                photographArticleLikeTotal.textContent = likes;
        const   photographArticleLikeHeart = document.createElement('span');
                photographArticleLikeHeart.classList.add('articles__media__like__heart');
                photographArticleLike.appendChild(photographArticleLikeTotal);
                photographArticleLike.appendChild(photographArticleLikeHeart);

        photographArticle.appendChild(photographArticleIllustration);
        photographArticle.appendChild(photographArticleName);
        photographArticle.appendChild(photographArticleLike);

        return (photographArticle);
    }

    return { getCardDOM, getContactDOM, getPictureDOM, getArticlesDOM }
}
/// {}