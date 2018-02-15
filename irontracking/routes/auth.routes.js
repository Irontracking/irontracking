const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');

router.get('/', authController.getLogin);
router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] })
);
router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/index' }),
  authController.failedLogin
);

router.get('/logout', authController.doLogout);

module.exports = router;