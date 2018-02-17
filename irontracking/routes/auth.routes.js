const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');

router.get('/', authController.getLogin);
router.get('/auth/github',
  passport.authenticate('github-auth', { scope: [ 'user:email' ] })
);
router.get('/auth/github/callback', authController.doLogin);

router.get('/logout', authController.doLogout);

module.exports = router;