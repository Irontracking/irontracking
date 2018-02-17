module.exports.getDashboard = (req, res, next) => {
  console.log(req.session.passport.user.id)
  res.render('admin/index');
};