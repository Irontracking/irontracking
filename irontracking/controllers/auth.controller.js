module.exports.getLogin = (req, res, next) => {
  res.render('index', { user: req.user });
};

module.exports.failedLogin = (req, res) => {
  res.redirect('/');
}

module.exports.doLogout = (req, res) => {
  req.logout();
  res.redirect('/');
}
