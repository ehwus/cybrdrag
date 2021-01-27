const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
require('dotenv').config();
const dbHandler = require('./db-handler');
const PerformanceHistory = require('../models/PerformanceHistory');
const Performer = require('../models/Performer');

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('GET /:id', () => {
  it('returns a performance history by ID', async () => {
    let performer = new Performer({});
    let savedPerformer = await performer.save();
    let performance = new PerformanceHistory({
      netearned: 69,
      performer: savedPerformer.id,
    });
    let savedPerformance = await performance.save();
    let response = await request.get(
      `/api/performers/history/${savedPerformer.id}`
    );
    expect(response.body[0]._id).toEqual(savedPerformance.id);
  });
});
