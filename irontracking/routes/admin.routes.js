const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const passport = require('passport');

router.get('/',
  passport.authenticate('github', { scope: [ 'user:email' ]}),
  adminController.getDashboard
);

module.exports = router;