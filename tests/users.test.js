const app = require('../server');
const User = require('../models/User');
const Performer = require('../models/Performer');
const supertest = require('supertest');
const request = supertest(app);
const jwt = require('jsonwebtoken');
require('dotenv').config();
const dbHandler = require('./db-handler');
const createValidUser = require('./test-helpers').createValidUser;

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe('Users', () => {
  it('Empty post request gives an array of three errors', async () => {
    const createUser = await request.post('/api/users');
    let errors = createUser.body.errors.map((e) => e.msg);
    expect(errors.length).toEqual(3);
    expect(errors).toContain('Usernames must be between 5 and 30 characters');
    expect(errors).toContain('Please include a valid email');
    expect(errors).toContain('Password must be at least 5 characters long');
  });

  it('Returns a JSON token on successful sign up', async () => {
    const createUser = await createValidUser();
    expect(createUser.body.token).not.toBe(null);
  });

  it('Returns a 400 status if trying to create user that exists', async () => {
    const createUser = await createValidUser();
    const duplicateUser = await createValidUser();
    expect(duplicateUser.status).toEqual(400);
  });

  it('returns a server error if something goes wrong during the creation process', async () => {
    const oldSecret = process.env.JWT_SECRET;
    const oldConsole = console.error;
    console.error = jest.fn();
    process.env.JWT_SECRET = '';

    let createUser = await createValidUser();
    expect(createUser.status).toEqual(500);

    process.env.JWT_SECRET = oldSecret;
    console.error = oldConsole;
  });

  it('adds a share purchase', async () => {
    let user = new User({
      username: 'kenneth',
      email: 'kenneth@biz.com',
      password: 'partario',
    });
    let performer = new Performer({});
    let savedPerformer = await performer.save();
    let createdUser = await user.save();
    await createdUser.buy({ performer: savedPerformer.id, quantity: 1 });
    let updatedUser = await User.findById(createdUser.id);
    expect(updatedUser.shares[0].performer.toString()).toEqual(
      savedPerformer.id
    );
    expect(updatedUser.shares[0].quantity).toEqual(1);
  });
});
