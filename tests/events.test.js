const TRAITS = require('../models/helper/traits');
const possibleEvents = require('../models/helper/possibleEvents');
const Performer = require('../models/Performer');
const Event = require('../models/Event');
const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
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

  it('All traits are used', () => {
    let usedTraits = [];

    for (let key in possibleEvents) {
      for (let trait of possibleEvents[key].counters) {
        usedTraits.push(trait);
      }
    }

    for (let trait of Object.keys(TRAITS)) {
      expect(usedTraits).toContain(trait);
    }
  });

  it('No typos in the traits file', () => {
    for (let key in TRAITS) {
      expect(TRAITS[key]).toEqual(key);
    }
  });

  it('Perform function has a chance to spawn an event', async () => {
    let performer = new Performer({ worth: 999999 });
    let savedPerformer = await performer.save();
    for (let i = 0; i < 50; i++) {
      await performer.perform();
    }

    let allEvents = await Event.find({});
    expect(allEvents.length).toBeGreaterThan(0);
  });

  describe('GET /', () => {
    it('Returns all events', async () => {
      let performer = new Performer({ worth: 99999 });
      let savedPerformer = await performer.save();
      let event = new Event({
        performer: performer.id,
        name: 'foo',
        webdescription: 'foo',
      });
      let savedEvent = await event.save();
      let profileQuery = await request.get('/api/events');
      expect(profileQuery.body[0]._id).toEqual(savedEvent.id);
    });
  });
});
