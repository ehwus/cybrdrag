module.exports = {
  foodPoisoning: {
    name: 'Food Poisoning',
    counters: ['VEGETARIAN', 'FUSSY'],
    webDescription: 'has come down with food poisoning. Get well soon, hun!',
    timeout: 1,
  },
  radicalism: {
    name: 'Radicalism',
    counters: ['SUBSERVIENT', 'UNDERCOVER', 'ANARCHOCAPITALIST'],
    webDescription:
      'has been rounded up by the thoughtPolice, off to the Reeducation Centre Prime!',
    timeout: 3,
  },
  cancelled: {
    name: 'Cancelled',
    counters: ['WOKE', 'OBLIVIOUS'],
    webDescription: "has been cancelled! Maybe it's time to log off, hun?",
    timeout: 3,
  },
  swatted: {
    name: 'Swatted',
    webDescription: 'has had a SWAT team called on her during stream, yikes!',
    counters: ['HACKER', 'UNDERCOVER', 'OBLIVIOUS'],
    multiplier: 0,
  },
  streamerRaid: {
    name: 'Raided',
    webDescription: 'has had her stream invaded by MrSkewdee, you go girl!',
    counters: ['BORING', 'TOXIC'],
    multiplier: 3,
  },
};
