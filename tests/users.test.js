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

  it('Returns an error if you try to spend more money then you have', async () => {
    let user = new User({
      username: 'kenneth',
      email: 'kenneth@biz.com',
      password: 'partario',
    });
    let performer = new Performer({});
    let savedPerformer = await performer.save();
    let createdUser = await user.save();
    expect.assertions(1);

    await expect(
      createdUser.buy({ performer: savedPerformer.id, quantity: 200 })
    ).rejects.toEqual(new Error('Insufficient funds'));
  });

  it('Selling shares in a performer increases your balance', async () => {
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
    await updatedUser.sell({ performer: savedPerformer.id, quantity: 1 });
    let userSoldShares = await User.findById(updatedUser.id);
    expect(userSoldShares.balance).toEqual(1000);
  });

  it("Won't allow selling of more shares than you have", async () => {
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
    await expect(
      updatedUser.sell({ performer: savedPerformer.id, quantity: 100 })
    ).rejects.toEqual(new Error("You can't sell more shares than you own"));
  });

  it("Will throw an error when trying to sell shares that aren't owned", async () => {
    let user = new User({
      username: 'kenneth',
      email: 'kenneth@biz.com',
      password: 'partario',
    });
    let performer = new Performer({});
    let savedPerformer = await performer.save();
    let createdUser = await user.save();
    await expect(
      createdUser.sell({ performer: savedPerformer.id, quantity: 100 })
    ).rejects.toEqual(new Error('You have no shares in this performer'));
  });

  it('Will remove entry from array if shares get to zero', async () => {
    let user = new User({
      username: 'kenneth',
      email: 'kenneth@biz.com',
      password: 'partario',
    });
    let performer = new Performer({});
    let performer2 = new Performer({});
    let savedPerformer = await performer.save();
    let savedPerformer2 = await performer2.save();

    let createdUser = await user.save();
    await createdUser.buy({ performer: savedPerformer.id, quantity: 1 });
    await createdUser.buy({ performer: savedPerformer2.id, quantity: 40 });
    await createdUser.sell({ performer: savedPerformer.id, quantity: 1 });
    await createdUser.sell({ performer: savedPerformer2.id, quantity: 20 });

    let updatedUser = await User.findById(createdUser.id);
    expect(updatedUser.shares.length).toEqual(1);
  });
});
