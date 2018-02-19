const Exercise = require('../models/exercise.model');
const ExerciseUser = require('../models/exercise-user.model');
const mongoose = require('mongoose');

module.exports.getDashboard = (req, res, next) => {
  // res.send(req.session.passport.user);

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

module.exports.updateExerciseUser = (req, res, next) => {
  // Declarations
  var idExercise = req.body.idexercise;
  var idGithub = req.session.passport.user.id;
  var comment = req.body.comment;

  // Validation:
  ExerciseUser.findOne({
    'idExercise': idExercise,
    'idGithub': idGithub
  }, function (err, exerciseUser) {
    // Validation: exerciseUser is already created
    console.log(exerciseUser);
    if (exerciseUser) {
      ExerciseUser.update({
        idExercise: '5a884334826d4b1c4d412ea8',
        idGithub: '29918443'
      }, {$set: {comment: comment}}, function (err, exerciseuser) {
        if (err) return handleError(err);
        res.send(exerciseuser);
      });
      res.redirect('/dashboard');
    } else {
      // Validation: exerciseUser is not created

      // Instance of ExerciseUser
      const newExerciseUser = new ExerciseUser({
        idExercise: idExercise,
        idGithub: idGithub,
        comment: comment
      });

      // save()
      newExerciseUser.save();
      res.redirect('/dashboard');
    }
  });
};