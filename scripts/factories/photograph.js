function photographFactory(data) {
    const { name, city, country, id, portrait, price, tagline } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    const file = 'photographer.html';
    const param = '?id=';

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        const imgSrc = replaceSpace(picture);
        img.setAttribute("src", imgSrc);

        const h2 = document.createElement( 'h2' );
        const link = document.createElement( 'a' );
        link.textContent = name;
        link.href = file + param + id;
        h2.appendChild(link);

        const address = document.createElement( 'address' );
        const spanAddress = document.createElement( 'span' );
        spanAddress.textContent = city + ', ' + country;
        address.appendChild(spanAddress);

        const paragraphTagLine = document.createElement( 'p' );
        paragraphTagLine.textContent = tagline;

        const spanPrice = document.createElement( 'span' );
        spanPrice.textContent = price + '€/jour';

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(address);
        article.appendChild(paragraphTagLine);
        article.appendChild(spanPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}