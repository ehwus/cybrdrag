const TRAITS = require('../models/helper/traits');
const possibleEvents = require('../models/helper/possibleEvents');

describe('Events', () => {
  it('Possible events file is valid', () => {
    let keys = Object.keys(possibleEvents);
    for (let key of keys) {
      // Check there is a name and web description
      expect(possibleEvents[key].webDescription).toBeTruthy();
      expect(possibleEvents[key].name).toBeTruthy();

      // Check all counters are in constant file
      for (let counter of possibleEvents[key].counters) {
        expect(TRAITS[counter]).toBeTruthy();
      }
    }
  });
});
