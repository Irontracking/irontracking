module.exports.getLogin = (req, res, next) => {
  if( typeof(req.user) !== 'undefined' ) {
    res.redirect('/dashboard');
  } else {
    res.render('index', { user: req.user });
  }
};

module.exports.doLogin = (req, res, next) => {
  res.redirect(`/dashboard?code=${req.query.code}`);
};

module.exports.doLogout = (req, res, next) => {
  req.logout();
  res.redirect('/');
};
