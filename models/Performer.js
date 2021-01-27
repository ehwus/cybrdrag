const mongoose = require('mongoose');
const PerformanceHistory = require('./PerformanceHistory');
const randomName = require('./helper/randomName');
const randomEvent = require('./helper/randomEvent');

const PerformerSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
  },
  worth: {
    type: Number,
    default: 2000,
  },
  avatar: {
    type: String,
    default: null,
  },
  costperperformance: {
    type: Number,
    default: 100,
  },
  timeout: {
    type: Number,
    default: 0,
  },
});

PerformerSchema.methods.perform = async function () {
  let multiplier = 1;
  let isEventTriggered = randomEvent();

  if (isEventTriggered) {
    if (isEventTriggered.multiplier) multiplier = isEventTriggered.multiplier;
    if (isEventTriggered.timeout) this.timeout += isEventTriggered.timeout;
  }

  if (this.timeout != 0) {
    let netRevenue = -this.costperperformance;
    this.timeout -= 1;

    this.worth += netRevenue;
  } else {
    let netRevenue = Performer.calculateEarning() - this.costperperformance;

    this.worth += netRevenue;

    let performance = new PerformanceHistory({
      netearned: netRevenue,
      performer: this.id,
    });

    await performance.save();
  }
  await this.save();
};

PerformerSchema.statics.calculateEarning = function () {
  return Math.floor(Math.random() * 501);
};

PerformerSchema.pre('save', async function () {
  if (this.name === null) {
    this.name = await randomName();
  }

  if (this.avatar === null) {
    this.avatar = `https://avatars.dicebear.com/api/female/${this.id}.svg`;
  }
});

PerformerSchema.statics.allPerform = async function () {
  let performerList = await Performer.find({});
  for (i = 0; i < performerList.length; i++) {
    await performerList[i].perform();
  }
};

module.exports = Performer = mongoose.model('performer', PerformerSchema);
