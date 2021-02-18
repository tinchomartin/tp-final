const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserService = require("./services/userService");
const UserInstance = new UserService();
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },

    async (username, password, cb) => {
      try {
        const userData = await UserInstance.getByName(username);
        username.toLowerCase();

        if (!userData) {
          console.log("error de usuario");
          return cb(null, false);
        }

        //condicional de passport, se quita al agregar bcrypt
        // if (userData.password != password) {
        //   console.log("contraseña incorrecta");
        //   return cb(null, false);
        // }

        const compare = await bcrypt.compare(password, userData.password);
        // if (userData.password != password) {
        if (!compare) {
          return cb(null, false);
        }
        console.log("login exitoso");
        // se debe agregar passport initialize y passport session en app.js porque sino da error
        return cb(null, userData);
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.name);
});
passport.deserializeUser(async (name, cb) => {
  const data = await UserInstance.getByName(name);

  cb(null, data);
});
