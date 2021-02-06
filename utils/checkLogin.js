function checkLogin(req, res, next) {
  if (req.user) {
    console.log("usuario sin privilegios");
    next();
  } else {
    res.status(401).send("no autorizado");
  }
}

module.exports = checkLogin;
