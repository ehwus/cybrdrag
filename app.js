const connectDB = require('./config/db');
const createPerformers = require('./scripts/createPerformers.js');
const startCron = require('./scripts/startCron');
require('dotenv').config();

const app = require('./server.js');
const PORT = process.env.PORT || 5000;

connectDB();
createPerformers();
startCron();

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
