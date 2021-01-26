const possibleEvents = require('./possibleEvents');
const EVENT_CHANCE = require('./constants');

const randomEvent = () => {
  if (Math.random() < EVENT_CHANCE) {
    let keys = Object.keys(possibleEvents);
    return possibleEvents[keys[Math.floor(keys.length * Math.random())]];
  }
};

module.exports = randomEvent;
