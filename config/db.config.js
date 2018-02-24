const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);