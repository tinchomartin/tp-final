function checkAdmin(req, res, next) {
  if (req.user) {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403);
    }
  } else {
    res.status(401);
  }
}

module.exports = checkAdmin;
