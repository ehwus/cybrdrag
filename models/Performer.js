const mongoose = require('mongoose');
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
        event: {
          type: Object,
          default: null,
          name: {
            type: String,
          },
          webdescription: {
            type: String,
          },
          timeout: {
            type: Number,
          },
          multiplier: {
            type: Number,
          },
        },
      },
    ],
    default: [],
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
    this.performancehistory.push({
      netearned: netRevenue,
      event: isEventTriggered,
    });
    this.worth += netRevenue;
  } else {
    let netRevenue = Performer.calculateEarning() - this.costperperformance;
    this.performancehistory.push({
      netearned: netRevenue,
    });
    this.worth += netRevenue;
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
