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
  this.shares.push({ performer, quantity, buyprice });
  await this.save();
};

module.exports = User = mongoose.model('user', UserSchema);
