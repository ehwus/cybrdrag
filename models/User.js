const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Performer = require('./Performer');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  balance: {
    type: Number,
    default: 1000,
  },
  shares: [
    {
      performer: {
        type: Schema.Types.ObjectId,
        ref: 'performer',
      },
      quantity: {
        type: Number,
        required: true,
      },
      buyprice: {
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
});

UserSchema.methods.buy = async function (share) {
  const { performer, quantity } = share;
  let performerObject = await Performer.findById(performer);
  let buyprice = Math.floor(performerObject.worth * 0.01);
  if (buyprice * quantity <= this.balance) {
    this.shares.push({ performer, quantity, buyprice });
    this.balance -= buyprice * quantity;
    await this.save();
  } else {
    // there's probably a better way to format this error <3
    throw new Error('Insufficient funds');
  }
};

UserSchema.methods.sell = async function (share) {
  const { performer, quantity } = share;
  let performerObject = await Performer.findById(performer);
  let buyprice = Math.floor(performerObject.worth * 0.01);

  let target = this.shares.filter(
    (share) => share.performer.toString() === performer
  );

  if (target.length === 0)
    throw new Error('You have no shares in this performer');

  let matchedShare = target[0];
  let newBalance = matchedShare.quantity - quantity;

  if (newBalance < 0)
    throw new Error("You can't sell more shares than you own");

  matchedShare.quantity -= quantity;
  this.balance += quantity * buyprice;

  if (matchedShare.quantity === 0) {
    this.shares.splice(this.shares.indexOf(matchedShare), 1);
  }

  await this.save();
};

module.exports = User = mongoose.model('user', UserSchema);
