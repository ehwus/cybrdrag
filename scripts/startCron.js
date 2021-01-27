const CronJob = require('cron').CronJob;
const Performers = require('../models/Performer');

const startChron = () => {
  let job = new CronJob(
    '0 * * * *',
    () => {
      Performers.allPerform();
      console.log('Foo');
    },
    null,
    true,
    'Europe/London'
  );
  job.start();
};

module.exports = startChron;
