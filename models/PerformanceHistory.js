const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceHistorySchema = new mongoose.Schema({
  netearned: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  performer: {
    type: Schema.Types.ObjectId,
    ref: 'performer',
  },
});

module.exports = PerformanceHistory = mongoose.model(
  'performanceHistory',
  PerformanceHistorySchema
);
