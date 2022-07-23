// Tutorial => https://www.youtube.com/watch?v=TZh_AiOuBr8

/**
 * Observable class
 */
class eventsListeners {
  constructor () {
    this.listeners = [];
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  setEvent(callback) {
    this.listener = callback;
  }

  ifListener() {
    if(this.listeners.length > 0) {
      for(let listener of this.listeners) {
        // Because added event are function we can call listener var as a function
        listener();
      }
    }
  }
}