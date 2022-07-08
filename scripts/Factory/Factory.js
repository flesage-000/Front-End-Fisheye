class Factory {
  constructor(data, str) {
    switch (str) {
      case 'index':
        return new Photographers(data)
        break;

      case 'photographerHeader':
        return new Photographers(data)
        break;

      case 'photographer':
        return new Medias(data)
        break;

      default:
        throw 'unknwon str !!!';
    }
  }
}