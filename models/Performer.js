const mongoose = require('mongoose');
const PerformanceHistory = require('./PerformanceHistory');
const Event = require('./Event');
const randomName = require('./helper/randomName');
const randomEvent = require('./helper/randomEvent');
const TRAITS = require('./helper/traits');

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
  traits: [
    {
      type: String,
      default: [],
    },
  ],
});

PerformerSchema.methods.perform = async function () {
  let multiplier = 1;
  let isEventTriggered = randomEvent();
  let savedPerformance;

  if (isEventTriggered) {
    if (isEventTriggered.multiplier) multiplier = isEventTriggered.multiplier;
    if (isEventTriggered.timeout) this.timeout += isEventTriggered.timeout;

    let event = new Event({
      performer: this.id,
      name: isEventTriggered.name,
      webdescription: isEventTriggered.webdescription,
    });

    await event.save();
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

    performance.save();
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

  if (this.traits.length === 0) {
    let i = 0;
    let options = Object.keys(TRAITS).length;
    while (i < 3) {
      let randomTrait = Object.keys(TRAITS)[
        Math.floor(Math.random() * options)
      ];
      if (!this.traits.includes(randomTrait)) {
        this.traits.push(randomTrait);
        i++;
      }
    }
  }
});

PerformerSchema.statics.allPerform = async function () {
  let performerList = await Performer.find({});
  for (i = 0; i < performerList.length; i++) {
    await performerList[i].perform();
  }
};

module.exports = Performer = mongoose.model('performer', PerformerSchema);
