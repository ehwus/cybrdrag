const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API running');
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/performers', require('./routes/api/performers'));
app.use('/api/auth', require('./routes/api/auth'));

module.exports = app;
