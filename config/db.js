const mongoose = require('mongoose');
require('dotenv').config();

// Connect to local if not production
const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cybrdragtest';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
