const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
require('dotenv').config();
const dbHandler = require('./db-handler');
const createValidPerformer = require('./test-helpers').createValidPerformer;
const Performer = require('../models/Performer');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Performers', () => {
  it('has a route to get list of all performers', async () => {
    let profileQuery = await request.get('/api/performers');
    expect(profileQuery.status).toEqual(200);
  });

  it('Returns a performer object when searched for by id', async () => {
    let performer = new Performer({
      name: 'Madame Thiccsaud',
      performancehistory: []
    })
    await performer.save()
    let profileQuery = await request.get('/api/performers/id')
    expect(profileQuery.status).toEqual(200)
    expect(profileQuery.body.name).toEqual('Madame Thiccsaud')
  })
});
