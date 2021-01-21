const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
const jwt = require('jsonwebtoken');
require('dotenv').config();
const dbHandler = require('./db-handler');
const createValidUser = require('./test-helpers').createValidUser;

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Performers', () => {
  it('has a route to get list of all performers', async () => {
    let profileQuery = await request.get('/api/performers');
    expect(profileQuery.status).toEqual(200);
  });
});
