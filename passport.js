const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserService = require("./services/userService");
const UserInstance = new UserService();
//const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },

    async (username, password, cb) => {
      try {
        // console.log(username, password);
        const userData = await UserInstance.getByName(username);
        username.toLowerCase();
        // console.log(userData);

        if (!userData) {
          console.log("error de usuario");
          return cb(null, false);
        }
        if (userData.password != password) {
          console.log("error de clave");
          return cb(null, false);
        }

        // const compare = await bcrypt.compare(password, userData.password);
        // console.log(compare);
        // // if (userData.password != password) {
        // if (!compare) {
        //   console.log("error de contraseña");
        //   return cb(null, false);
        // }
        console.log("usuario exitoso");
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
