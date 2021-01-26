const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  counters: {
    type: [
      name: {
        type: String,
        required: true
      }
    ],
    default: []
  },
  
})