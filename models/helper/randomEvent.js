const possibleEvents = require('./possibleEvents');

const randomEvent = () => {
  let keys = Object.keys(possibleEvents);
  return possibleEvents[keys[Math.floor(keys.length * Math.random())]];
};

module.exports = randomEvent;
