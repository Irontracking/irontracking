const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');
const passport = require('passport');

router.get('/',
  passport.authenticate('github', { scope: [ 'user:email' ]}),
  dashboardController.getDashboard
);

module.exports = router;