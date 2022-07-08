class AppIndex {
  constructor(indexData) {
    this._indexData = indexData;

    this.$indexWrapper = document.querySelector('.photographer_section');
  }

  CreateIndex() {
    this._indexData.photographers
      .forEach(photographer => {
        photographer = new Factory(photographer, 'index');
        const indexTemplate = new PhotographerCard(photographer);

        this.$indexWrapper.appendChild(
          indexTemplate.createPhotographerCard()
        )
      });
  }
}