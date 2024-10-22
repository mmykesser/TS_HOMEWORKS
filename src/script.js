'use strict';

class EventManager {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(
      (cb) => cb !== callback
    );
  }

  trigger(eventName) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((callback) => {
      callback(eventName, this);
    });
  }
}

const manager = new EventManager();

const hiAndrzej = (eventName, callback) => {
  console.log('Hi', eventName, callback);
};
const wspAndrzej = (eventName, callback) => {
  console.log("What's good?", eventName, callback);
};

const byeAndrzej = (eventName, callback) => {
  console.log('Bye!', eventName, callback);
};

manager.on('Andrzej', hiAndrzej);
manager.on('Andrzej', wspAndrzej);
manager.on('Andrzej', byeAndrzej);

manager.trigger('Andrzej');

console.log(`Example off What's good? `);

manager.off('Andrzej', wspAndrzej);

manager.trigger('Andrzej');
