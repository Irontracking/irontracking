const Exercise = require('../models/exercise.model');
const mongoose = require('mongoose');

module.exports.getAdminDashboard = (req, res, next) => {
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
        res.render('admin/index', {
          module1: module1,
          module2: module2,
          module3: module3,
          message: req.query.message,
          user: req.session.passport.user
        });
      });
    });
  });

};

module.exports.newExercise = (req, res, next) => {
  // Declarations
  var name = req.body.name;
  var module = req.body.module;
  var iterations = req.body.iterations;
  var link = req.body.link;

  // Validation 1: All fields are required
  if (name === '' || module === '' || iterations === '' || link === '') {
    res.redirect('/admin?message=Todos los campos son obligatorios');
    return;
  }

  const newExercise = new Exercise({
    name: name,
    module: module,
    iterations: iterations,
    link: link
  });

  // save()
  newExercise.save();
  res.redirect('/admin?message=Ejercicio creado correctamente');


};


module.exports.updateExercise = (req, res, next) => {
  // Declarations
  var idex = req.body.idex;
  var name = req.body.name;
  var iterations = req.body.iterations;
  var link = req.body.link;

  console.log(link);
  /*
  // Validation 1: All fields are required
  if (name === '' || module === '' || iterations === '' || link === '') {
    res.redirect('/admin?message=Todos los campos son obligatorios');
    return;
  }
*/


  Exercise.update({_id: idex}, {$set: {name: name, iterations: iterations, link: link}}, function (err, exerciseuser) {
      if (err) return (err);
    });

  res.redirect('/admin');


};


module.exports.deleteExercise = (req, res, next) => {
  var idex = req.body.idex;
  // console.log(req.body.idex);
  // Exercise.remove({_id: idex});

  Exercise.remove({_id: idex}, function(err) {
  res.redirect('/admin')
  });

};