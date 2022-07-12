class Medias {
  constructor(data) {
    this._id = data.id;
    this._photographerID = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._video = data.video;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
  }

  get id() {
    return this._id
  }

  get photographerID() {
    return this._photographerID
  }

  get title() {
    return this._title
  }

  get image() {
    if (this._image !== undefined) {
      return './assets/photographers/' + this._photographerID + '/' + this._image
    } else {
      return null
    }
  }

  get video() {
    if (this._video !== undefined) {
      return './assets/photographers/' + this._photographerID + '/' + this._video
    } else {
      return null
    }
  }

  get likes() {
    return this._likes
  }

  get date() {
    return this._date
  }

  get price() {
    return this._price
  }
}