const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new mongoose.Schema({
  performer: {
    type: Schema.Types.ObjectId,
    ref: 'performer',
    required: true,
  },
  performance: {
    type: Schema.Types.ObjectId,
    ref: 'performance',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  webdescription: {
    type: String,
    required: true,
  },
});
