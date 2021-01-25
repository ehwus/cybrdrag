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

PerformerSchema.methods.perform = async function () {
  this.performancehistory.push({
    netearned: 69,
  });
  await this.save();
};

module.exports = Performer = mongoose.model('performer', PerformerSchema);
