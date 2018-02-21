module.exports.stats = (req, res, next) => {
    res.render('stats', {
      user: req.session.passport.user
    });
  };
  