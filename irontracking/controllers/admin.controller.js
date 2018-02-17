const Exercise = require('../models/exercise.model');
const mongoose = require('mongoose');

module.exports.getDashboard = (req, res, next) => {
  // console.log(req.session.passport.user.id);
  // res.render('admin/index', { user: req.session.passport.user.id });
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
        console.log(module1);
        res.render('admin/index', {
          module1: module1,
          module2: module2,
          module3: module3
        });
      });
    });
  });

};

/*



*/



// NO BORRAR, ES PARA CREAR NUEVOS EJERCICIOS
/*
const newExercise = new Exercise({
  name: 'Ejercicio 1',
  module: 1,
  iterations: 4,
  link: "www.url.com"
});

// save()
  newExercise.save();
*/
  console.log(req.session.passport.user.id)
  res.render('admin/index');
};
