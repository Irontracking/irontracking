const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user.model');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use('github-auth', new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.LOCALHOST
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    authenticateOAuthUser(accessToken, refreshToken, profile, function() {
      process.nextTick(function () {
        return done(null, profile);
      });
    });
  }
));

function authenticateOAuthUser(accessToken, refreshToken, profile, next) {
  User.findOne({ idGithub: profile.id })
    .then(user => {
      if (user) {
        user.accessToken = accessToken;
        user.refreshToken = refreshToken;
        User.findByIdAndUpdate(user._id, user, {new: true})
          .then(user => next(null, user))
      } else {
        user = new User({
          idGithub: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          accessToken: accessToken,
          refreshToken: refreshToken,
          /*avatar_url: profile.avatar_url,*/
          role: 'user'
        });

        user.save()
          .then(() => {
            next(null, user);
          })
          .catch((error) => {
            console.log("ERROR:" + error);
            next(error)
          });
      }
      // res.locals.title = 'IronTr';
    })
    .catch(error => next(error));
}
