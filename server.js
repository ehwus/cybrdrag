const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/performers', require('./routes/api/performers'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/shares', require('./routes/api/shares'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

module.exports = app;