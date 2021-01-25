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
