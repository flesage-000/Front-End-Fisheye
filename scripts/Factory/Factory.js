class Factory {
  constructor(data, str) {
    if (str === '/index.html' || str === 'photographerHeader') {
      return new Photographers(data)
    } else if (str === '/photographer.html') {
      return new Medias(data)
    } else {
      throw 'unknwon str !!!';
    }
  }
}