// Tutorial => https://www.youtube.com/watch?v=TZh_AiOuBr8

class eventsListeners {
  constructor () {
    this.listeners = [];
  }

  addListener(callback) {
    // console.log('addListener', callback);
    this.listeners.push(callback);
  }

  setEvent(callback) {
    console.log('setEvent', callback);
    this.listener = callback;
  }

  ifListener() {
    if(this.listeners.length > 0) {
      for(let listener of this.listeners) {
        listener();
      }
    }
  }
}