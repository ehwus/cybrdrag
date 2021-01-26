const TRAITS = require('../models/helper/traits');
const possibleEvents = require('../models/helper/possibleEvents');
const Performer = require('../models/Performer');
require('dotenv').config();
const dbHandler = require('./db-handler');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Events', () => {
  it('Possible events file is valid', () => {
    let keys = Object.keys(possibleEvents);
    for (let key of keys) {
      // Check there is a name and web description
      expect(possibleEvents[key].webdescription).toBeTruthy();
      expect(possibleEvents[key].name).toBeTruthy();

      // Check all counters are in constant file
      for (let counter of possibleEvents[key].counters) {
        expect(TRAITS[counter]).toBeTruthy();
      }
    }
  });

  it('Perform function has a chance to spawn an event', async () => {
    let performer = new Performer({ worth: 999999 });
    let savedPerformer = await performer.save();
    for (let i = 0; i < 50; i++) {
      await performer.perform();
    }

    let updatedPerformer = await Performer.findById(savedPerformer.id);
    let eventsEncountered = [];
    for (let performance of updatedPerformer.performancehistory) {
      eventsEncountered.push(performance.event);
    }

    expect(eventsEncountered.filter((e) => e != null).length).toBeGreaterThan(
      0
    );
  });
});
