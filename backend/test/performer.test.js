const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const performerService = require('../src/services/performer');
const performerModel = require('../src/models/performer');

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe('performer ', () => {
    it('can be created correctly', async () => {
        await expect(performerService.create(performerComplete))
            .resolves
            .not
            .toThrow();
    });

    it('throws an error correctly', async () => {
        expect.assertions(1);
        await expect(performerService.create())
            .rejects
            .toEqual(new Error('Missing performer'));
    })
});

describe('tester ', () => {
    it('creates with the correct name', async () => {
        await performerService.create(performerIncomplete);
        await performerModel.find().lean().then(console.log);
    });
});

const performerComplete = {
    name: 'Moxy Bowels',
    netWorth: 5000,
};

const performerIncomplete = {
    name: 'Boxy Mowels',
    netWorth: 5,
}
