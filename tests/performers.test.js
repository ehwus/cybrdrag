const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
require('dotenv').config();
const dbHandler = require('./db-handler');
const Performer = require('../models/Performer');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Performers', () => {
  describe('Performers names', () => {
    it('Initializes with a randomly generated name', async () => {
      let performer = new Performer({});

      let savedPerformer = await performer.save();

      expect(savedPerformer.name).not.toBe(null);
      console.log(savedPerformer.name)
    })
  })
  describe('perform()', () => {
    it('Adds a performance to the performance history', async () => {
      let performer = new Performer({
        name: 'Madame Thiccsaud',
      });

      let savedPerformer = await performer.save();
      await savedPerformer.perform();
      let updatedPerformer = await Performer.findById(savedPerformer.id);
      expect(updatedPerformer.performancehistory.length).toBe(1);
    });

    it('Gives a net performance amount that takes costs into consideration', async () => {
      let performanceEarningsFunction = Performer.calculateEarning;
      Performer.calculateEarning = function () {
        return 100;
      };

      let performer = new Performer({
        name: 'Madame Thiccsaud',
      });
      let savedPerformer = await performer.save();
      await savedPerformer.perform();
      let updatedPerformer = await Performer.findById(savedPerformer.id);
      expect(updatedPerformer.performancehistory[0].netearned).toEqual(0);

      Performer.calculateEarning = performanceEarningsFunction;
    });

    it('Affects the new worth of the performer', async () => {
      let performanceEarningsFunction = Performer.calculateEarning;
      Performer.calculateEarning = function () {
        return 200;
      };

      let performer = new Performer({
        name: 'Madame Thiccsaud',
      });
      let savedPerformer = await performer.save();
      await savedPerformer.perform();
      let updatedPerformer = await Performer.findById(savedPerformer.id);
      expect(updatedPerformer.worth).toEqual(2100);

      Performer.calculateEarning = performanceEarningsFunction;
    });
  });

  describe('GET /', () => {
    it('has a route to get list of all performers', async () => {
      let profileQuery = await request.get('/api/performers');
      expect(profileQuery.status).toEqual(200);
    });

    it('Returns an error if there is a database failure', async () => {
      let oldPerformer = Performer.find;
      let oldConsole = console.error;
      console.error = jest.fn();
      Performer.find = jest.fn(() => {
        throw new Error('Foo');
      });
      let profileQuery = await request.get('/api/performers');
      expect(profileQuery.status).toEqual(500);

      Performer.find = oldPerformer;
      console.error = oldConsole;
    });
  });

  describe('GET /:id', () => {
    it('Returns a performer object when searched for by id', async () => {
      let performer = await new Performer({
        name: 'Madame Thiccsaud',
      });
      let savedPerformer = await performer.save();
      let profileQuery = await request.get(
        `/api/performers/${savedPerformer.id}`
      );
      expect(profileQuery.status).toEqual(200);
      expect(profileQuery.body.name).toEqual('Madame Thiccsaud');
    });

    it('Returns an error if there is a database failure', async () => {
      let oldPerformer = Performer.find;
      let oldConsole = console.error;
      console.error = jest.fn();
      Performer.find = jest.fn(() => {
        throw new Error('Foo');
      });
      let profileQuery = await request.get('/api/performers/53265426');
      expect(profileQuery.status).toEqual(500);

      Performer.find = oldPerformer;
      console.error = oldConsole;
    });
  });
});
