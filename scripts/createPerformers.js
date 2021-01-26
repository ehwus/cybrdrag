const Performer = require('../models/Performer');

const performerTarget = 20;

const createPerformers = async () => {
  let performerCount = await Performer.count({});
  let performerNeeded = performerTarget - performerCount;

  for (let i = 0; i < performerNeeded; i++) {
    let newPerformer = new Performer({});
    await newPerformer.save();
  }

  if (process.env.NODE_ENV != 'production') {
    await Performer.allPerform();
  }
};

module.exports = createPerformers;
