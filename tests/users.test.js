const app = require('../server');
const User = require('../models/User');
const supertest = require('supertest');
const request = supertest(app);
const jwt = require('jsonwebtoken');
require('dotenv').config();
const dbHandler = require('./db-handler');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Users', () => {
  it('Empty post request gives an array of three errors', async () => {
    const createUser = await request.post('/api/users');
    let errors = createUser.body.errors.map((e) => e.msg);
    expect(errors.length).toEqual(3);
    expect(errors[0]).toEqual('Usernames must be between 5 and 30 characters');
    expect(errors[1]).toEqual('Please include a valid email');
    expect(errors[2]).toEqual('Password must be at least 5 characters long');
  });

  it('Returns a JSON token on successful sign up', async () => {
    const createUser = await request
      .post('/api/users')
      .send({
        username: 'kenneth',
        email: 'kenneth@biz.com',
        password: 'partario',
      })
      .set('Accept', 'application/json');

    expect(createUser.body.token).not.toBe(null);
  });

  it('Returns a 400 status if trying to create user that exists', async () => {
    await request
      .post('/api/users')
      .send({
        username: 'kenneth',
        email: 'kenneth@biz.com',
        password: 'partario',
      })
      .set('Accept', 'application/json');

    const createUser = await request
      .post('/api/users')
      .send({
        username: 'kenneth',
        email: 'kenneth@biz.com',
        password: 'partario',
      })
      .set('Accept', 'application/json');

    expect(createUser.status).toEqual(400);
  });
});
