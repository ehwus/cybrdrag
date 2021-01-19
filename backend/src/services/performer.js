const performerModel = require('../models/performer');

module.exports.create = async (performer) => {
    if (!performer)
        throw new Error('Missing performer');

    await performerModel.create(performer);
}