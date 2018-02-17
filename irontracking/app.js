const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
// const util = require('util');
const session = require('express-session');
// const methodOverride = require('method-override');
// const GitHubStrategy = require('passport-github2').Strategy;
const partials = require('express-partials');

// const adminRoutes = require('./routes/admin.routes');
const authRoutes = require('./routes/auth.routes');
const mailRoutes = require('./routes/comment.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const statsRoutes = require('./routes/stats.routes');

const app = express();

// Connect
// mongoose.connect('mongodb:localhost/it');

require('./config/db.config');
require('dotenv').config();
require('./config/passport.config');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(partials());
app.use(expressLayouts);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', authRoutes);

app.use('/dashboard', dashboardRoutes);
app.use('/stats', statsRoutes);
// app.use('/admin', adminRoutes);
app.use('/mail', mailRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
