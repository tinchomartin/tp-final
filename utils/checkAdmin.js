function checkAdmin(req, res, next) {
  if (req.user) {
    console.log(req.user);
    if (req.user.isAdmin) {
      console.log("login exitoso");
      next();
    } else {
      res.status(403).send("No sos admin");
    }
  } else {
    res.status(401).send("acceso no autorizado");
  }
}

module.exports = checkAdmin;
