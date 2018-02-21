const Exercise = require('../models/exercise.model');
const ExerciseUser = require('../models/exercise-user.model');
const mongoose = require('mongoose');

module.exports.getDashboard = (req, res, next) => {
  // Declarations
  var module1;
  var module2;
  var module3;
  var exercisesUser;

  // Database Query to get exercises from module 1
  ExerciseUser.find({ idGithub: req.session.passport.user.id }, (err, exercises) => {
    exercisesUser = exercises;
    Exercise.find({ module: 1 }, (err, mod ) => {
      module1 = mod;
      // console.log(module1);
      Exercise.find({ module: 2 }, (err, mod2 ) => {
        module2 = mod2;
        Exercise.find({ module: 3 }, (err, mod3 ) => {
          module3 = mod3;

          // console.log(req.session.passport.user);

          res.render('dashboard', {
            module1: module1,
            module2: module2,
            module3: module3,
            exercisesUser: exercisesUser,
            user: req.session.passport.user,
          });
        });
      });
    });
  })
};

module.exports.updateExerciseUser = (req, res, next) => {
  // Declarations
  var idExercise = req.body.idexercise;
  var idGithub = req.session.passport.user.id;
  var comment = req.body.comment;
  var iterations = [req.body.Primera, req.body.Segunda, req.body.Tercera, req.body.Cuarta, req.body.Quinta, req.body.Sexta, req.body.Septima, req.body.Octava, req.body.Novena, req.body.Decima];

  // Validation:
  ExerciseUser.findOne({
    'idExercise': idExercise,
    'idGithub': idGithub
  }, function (err, exerciseUser) {
    // Validation: exerciseUser is already created
    if (exerciseUser !== null ) {
      ExerciseUser.update({
        idExercise: idExercise,
        idGithub: '29918443'
      }, {$set: {comment: comment, iterations: iterations}}, function (err, exerciseuser) {
        if (err) return (err);
      });
    } else {
      // Validation: exerciseUser is not created

      // Instance of ExerciseUser
      const newExerciseUser = new ExerciseUser({
        idExercise: idExercise,
        idGithub: idGithub,
        comment: comment,
        iterations: iterations
      });
      // save()
      newExerciseUser.save();
    }
    // Redirection
    res.redirect('/dashboard');
  });
};