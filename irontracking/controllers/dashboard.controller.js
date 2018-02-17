module.exports.getDashboard = (req, res, next) => {
  res.render('dashboard', { user: req.session.passport.user });
};
