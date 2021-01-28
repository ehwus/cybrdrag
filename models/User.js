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
      performername: {
        type: String,
        default: null
      },
      avatar: {
        type: String,
        default: null
      },
    },
  ],
  default: [],
  transactions: [
    {
      type: {
        type: String,
        required: true,
      },
      performer: {
        type: Schema.Types.ObjectId,
        ref: 'performer',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      pricepershare: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

UserSchema.methods.buy = async function (share) {
  const { performer, quantity } = share;
  let performerObject = await Performer.findById(performer);

  let price = Math.floor(performerObject.worth * 0.01);

  if (price * quantity >= this.balance) throw new Error('Insufficient funds');

  this.shares.push({ performer, quantity, buyprice: price, performername: performerObject.name,
  avatar: performerObject.avatar, });
  this.balance -= price * quantity;

  await this.save();
  await this.addTransaction({
    type: 'buy',
    performer: performer,
    quantity: quantity,
    pricepershare: price,
    performername: performerObject.name,
    avatar: performerObject.avatar,
  });
};

UserSchema.methods.sell = async function (share) {
  const { performer, quantity } = share;
  let performerObject = await Performer.findById(performer);
  if (performerObject.timeout != 0) {
    throw new Error("You can't sell a performer whilst they cannot stream!");
  }
  let price = Math.floor(performerObject.worth * 0.01);

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
  this.balance += quantity * price;

  if (matchedShare.quantity === 0) {
    this.shares.splice(this.shares.indexOf(matchedShare), 1);
  }

  await this.save();
  await this.addTransaction({
    type: 'sell',
    performer: performer,
    quantity: quantity,
    pricepershare: price,
    performername: performerObject.name,
    avatar: performerObject.avatar,
  });
};

UserSchema.methods.addTransaction = async function (transaction) {
  this.transactions.push(transaction);

  await this.save();
};

module.exports = User = mongoose.model('user', UserSchema);
