const express = require("express");
const router = express.Router();
const passport = require(`passport`);
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});
const upload = multer({ storage: storage });
const MovieController = require(`./../controllers/movieController`);
const MovieService = require(`./../services/movieService`);
const MovieInstance = new MovieController(new MovieService());
const UserController = require(`./../controllers/userController`);
const UserService = require(`./../services/userService`);

const UserInstance = new UserController(new UserService());
const checkAdmin = require("./../utils/checkAdmin");
const checkLogin = require("./../utils/checkLogin");

router.get(
  "/movies",
  /* checkLogin, */ function (req, res, next) {
    MovieInstance.getMovies(req, res);
  }
);

router.get("/movies/:id", checkLogin, function (req, res, next) {
  MovieInstance.getMovieById(req, res);
});

router.post("/movies", upload.single("image"), function (req, res, next) {
  MovieInstance.addMovie(req, res);
});

router.put(
  "/movies/edit/:id",
  upload.single("image"),
  checkAdmin,
  function (req, res, next) {
    MovieInstance.updateMovie(req, res);
  }
);

router.delete(
  "/movies/delete/:id",
  // checkAdmin,
  function (req, res, next) {
    MovieInstance.deleteMovie(req, res);
  }
);

router.get("/users", function (req, res, next) {
  UserInstance.getUser(req, res);
});

router.get("/users/:id", function (req, res, next) {
  UserInstance.getUserById(req, res);
});

router.post("/users", function (req, res) {
  UserInstance.addUser(req, res);
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  return res.send("ok");
});

router.get("/*", function (req, res) {
  res.send(
    "Para comenzar ingresa a /movies o /users para obtener los listados. /login para ingresar tus credenciales"
  );
});

module.exports = router;
