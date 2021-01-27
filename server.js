const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/performers', require('./routes/api/performers'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/events', require('./routes/api/events'));

module.exports = app;
