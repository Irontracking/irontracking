const Exercise = require('../models/exercise.model');
// const ExerciseUser = require('../models/exercise-user.model');
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
  /*
  var name = req.body.name;
  var module = req.body.module;
  var iterations = req.body.iterations;
  var link = req.body.link;


  // Validation 1: All fields are required
  if( name === '' || module === '' || iterations === '' || link === '' ) {
    res.redirect('/admin?message=Todos los campos son obligatorios');
    return;
  }


  const newExerciseUser = new ExerciseUser({
    exercise: "5a8825ed8b65c51395c5ff19",
    idGithub: 29918443,
    comentario: 'Hola cara bolas'
  });

  // save()
  newExerciseUser.save();
  // res.redirect('/admin?message=Ejercicio creado correctamente');

*/

  // console.log(req.session.passport.user.login);
  res.send('Ejercicio Actualizado');
};
