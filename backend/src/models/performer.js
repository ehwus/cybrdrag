const mongoose = require('mongoose');

const performerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    netWorth: { type: Number, required: true },
});

module.exports = mongoose.model('performer', performerSchema)