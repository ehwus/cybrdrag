const connectDB = require('./config/db');
require('dotenv').config();

const app = require('./server.js');
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
