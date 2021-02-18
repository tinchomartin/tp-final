function checkLogin(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401);
  }
}

module.exports = checkLogin;
