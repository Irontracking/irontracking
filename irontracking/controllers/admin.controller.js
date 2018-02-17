module.exports.getDashboard = (req, res, next) => {
  res.send('Hola admin');
  // res.render('dashboard', { user: req.user });
};