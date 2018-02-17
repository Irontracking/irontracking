const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/user.model')

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/dashboard"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    authenticateOAuthUser(accessToken, refreshToken, profile, function() {
      console.log(profile);
      process.nextTick(function () {
        return done(null, profile);
      });
    });
  }
));

function authenticateOAuthUser(accessToken, refreshToken, profile, next) {
  User.findOne({ ['social.github']: profile.idGithub })
    .then(user => {
      debugger;
      if (user) {
        next(null, user);
      } else {
        user = new User({
          idGithub: profile.id,
          username: profile.username,
          displayName: profile.displayName,
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
    })
    .catch(error => next(error));
}