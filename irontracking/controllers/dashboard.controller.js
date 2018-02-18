const Exercise = require('../models/exercise.model');
const mongoose = require('mongoose');

module.exports.getDashboard = (req, res, next) => {
  // Declarations
  var module1;
  var module2;
  var module3;
  var num1;
  var num2;
  var num3;

  // Database Query to get exercises from module 1
  Exercise.find({ module: 1 }, (err, mod ) => {
    module1 = mod;
    Exercise.find({ module: 2 }, (err, mod2 ) => {
      module2 = mod2;
      Exercise.find({ module: 3 }, (err, mod3 ) => {
        module3 = mod3;
        res.render('dashboard', {
          module1: module1,
          module2: module2,
          module3: module3,
          user: req.session.passport.user,
          message: req.query.message
        });
      });
    });
  });

  // res.render('dashboard', { user: req.session.passport.user });
};
