const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const passport = require('passport');

router.get('/',
  passport.authenticate('github-auth', { scope: [ 'user:email' ]}),
  dashboardController.getDashboard
);

router.post('/panel', (req, res, next) => {
  dashboardController.updateExerciseUser
});

module.exports = router;