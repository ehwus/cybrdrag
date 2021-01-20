const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

it('Gets the test endpoint', async (done) => {
  const res = await request.get('/');
  expect(res.status).toBe(200);
  done();
});
