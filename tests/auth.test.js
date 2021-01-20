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

describe('Auth', () => {
  it('Empty post request leads to the following errors', async () => {
    const createAuthEmptyUser = await request.post('/api/auth');
    let errors = createAuthEmptyUser.body.errors.map((e) => e.msg);
    expect(errors.length).toEqual(2);
    expect(errors).toContain('Please include a valid email');
    expect(errors).toContain('Password is required');
  });

  it('Returns a JSON token on successful sign in', async () => {
    const createUser = await createValidUser();
    let authValidUser = await request
      .post('/api/auth')
      .send({
        email: 'kenneth@biz.com',
        password: 'partario',
      })
      .set('Accept', 'application/json');
    expect(authValidUser.body.token).not.toBe(null);
  });
});
