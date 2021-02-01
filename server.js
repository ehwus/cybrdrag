const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
const createPerformers = require('./scripts/createPerformers.js');
const startCron = require('./scripts/startCron');

app.use(express.json({extended: false}));
connectDB();
createPerformers();
startCron();

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/performers', require('./routes/api/performers'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/shares', require('./routes/api/shares'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/client'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

module.exports = app;
