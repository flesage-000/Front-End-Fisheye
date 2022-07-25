class Factory {
  /**
   *
   * @param {object} data JSON data
   * @param {string} page The page subject
   * @returns A loaded class
   */
  constructor(data, page) {
    switch (page) {
      case "index":
        return new Photographers(data);

      case "photographerHeader":
        return new Photographers(data);

      case "photographer":
        return new Medias(data);

      default:
        throw "unknwon page !!!";
    }
  }
}