const mongoose = require('mongoose');

const PerformerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  worth: {
    type: Number,
    default: 2000,
  },
  performancehistory: {
    type: [
      {
        netearned: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    default: [],
  },
  costperperformance: {
    type: Number,
    default: 100,
  },
});

module.exports = Performer = mongoose.model('performer', PerformerSchema);
