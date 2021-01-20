const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
const dbHandler = require('./db-handler');

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('testing', () => {
  it('Connects to test', async (done) => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    done();
  });
});
