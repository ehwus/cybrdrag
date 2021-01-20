const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API running');
});
