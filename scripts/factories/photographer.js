function photographerFactory(data) {
    const { name, city, country, portrait, price, tagline } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

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