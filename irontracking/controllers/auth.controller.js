module.exports.getLogin = (req, res, next) => {
  res.render('index', { user: req.user });
};

module.exports.doLogin = (req, res, next) => {
  passport.authenticate('github-auth', (error, user) => {
    if(error) {
      next(error);
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error);
        } else {
          res.render('dashboard', { user });
        }
      });
    }
  })(req, res, next);
};

module.exports.doLogout = (req, res, next) => {
  req.logout();
  res.redirect('/');
};
