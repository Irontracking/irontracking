const mongoose = require('mongoose');
const DB_NAME = 'it-dev';
const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost/${DB_NAME}`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI)
  .then(() => {
    console.info(`Connected to database: ${DB_NAME}`)
  })
  .catch(error => {
    console.error(error);
  });