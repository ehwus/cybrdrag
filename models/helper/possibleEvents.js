// Possible events that can occur
// Run 'npm test' to be validate
// Events must have a name and webdescription
// timeout and multiplier currently supported as consequences
// ensure counter is included in traits.js

module.exports = {
  foodPoisoning: {
    name: 'Food Poisoning',
    counters: ['VEGETARIAN', 'FUSSY'],
    webdescription: 'has come down with food poisoning. Get well soon, hun!',
    timeout: 1,
  },
  radicalism: {
    name: 'Radicalism',
    counters: ['SUBSERVIENT', 'UNDERCOVER', 'ANARCHOCAPITALIST'],
    webdescription:
      'has been rounded up by the thoughtPolice, off to the Reeducation Centre Prime!',
    timeout: 3,
  },
  cancelled: {
    name: 'Cancelled',
    counters: ['WOKE', 'OBLIVIOUS'],
    webdescription: "has been cancelled! Maybe it's time to log off, hun?",
    timeout: 3,
  },
  swatted: {
    name: 'Swatted',
    webdescription: 'has had a SWAT team called on her during stream, yikes!',
    counters: ['HACKER', 'UNDERCOVER', 'OBLIVIOUS'],
    multiplier: 0,
  },
  streamerRaid: {
    name: 'Raided',
    webdescription: 'has had her stream invaded by MrSkewdee, you go girl!',
    counters: ['BORING', 'TOXIC'],
    multiplier: 3,
  },
};
