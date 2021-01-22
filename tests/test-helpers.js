const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

async function createValidUser() {
  return await request
    .post('/api/users')
    .send({
      username: 'kenneth',
      email: 'kenneth@biz.com',
      password: 'partario',
    })
    .set('Accept', 'application/json');
}

async function createValidPerformer() {
  return await request
    .post('/api/performers')
    .send({
      name: 'Madame Thiccsaud',
      performancehistory: [{ netearned: 0 }]
    })
    .set('Accept', 'application/json')
}


module.exports = { createValidUser, createValidPerformer };
