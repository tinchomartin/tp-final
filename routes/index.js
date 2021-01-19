const express = require("express");
const router = express.Router();
const passport = require(`passport`);
const MovieController = require(`./../controllers/movieController`);
const MovieService = require(`./../services/movieService`);
const MovieInstance = new MovieController(new MovieService());
const UserController = require(`./../controllers/userController`);
const UserService = require(`./../services/userService`);
const UserInstance = new UserController(new UserService());

router.get("/movies", function (req, res, next) {
  MovieInstance.getMovies(req, res);
});

router.get("/movies/:id", function (req, res, next) {
  MovieInstance.getMovieById(req, res);
});

router.post("/movies", function (req, res, next) {
  MovieInstance.addMovie(req, res);
});

router.get("/users", function (req, res, next) {
  UserInstance.getUser(req, res);
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  return res.send("ok");
});

router.get("/*", function (req, res) {
  res.send("Para comenzar ingresa a usar /movies, /users o /login");
});

module.exports = router;
