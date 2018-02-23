const Exercise = require('../models/exercise.model');
const ExerciseUser = require('../models/exercise-user.model');
const mongoose = require('mongoose');

module.exports.stats = (req, res, next) => {
  // Declarations
  var points = 0;

  // Database Query to get exercises
  ExerciseUser.find({ idGithub: req.user.id }, (err, exercises) => {
    // Counting points
    for( var i = 0; i < exercises.length; i++ ) {
      for( var j = 0; j < exercises[i].iterations.length; j++ ) {
        if( exercises[i].iterations[j] === 'on' ) {
          points++;
        }
      }
    }
    // Render stats
    res.render('stats', {
      user: req.user,
      points: points
    });



  });





  };
  