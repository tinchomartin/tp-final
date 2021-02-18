const User = require(`./../models/userModel`);
const bcrypt = require("bcrypt");

class UserService {
  getUser(data) {
    const query = User.find().limit(data).exec();
    return query;
  }

  getByName(name) {
    const query = User.findOne({ name }).exec();
    return query;
  }

  getUserById(id) {
    const query = User.findById(id).exec();

    return query;
  }

  //funcion complementaria para chequear si el usuario ya esta registrado

  checkUser(name) {
    const query = User.exists({ name: name });
    return query;
  }
  //funcion complementaria para chequear si existe el id ingresado
  checkUserId(id) {
    const query = User.exists({ _id: id });
    return query;
  }

  addUser(body) {
    return bcrypt.hash(body.password, 10).then((hash) => {
      body.password = hash;
      const newUser = new User(body);
      return newUser.save();
    });
  }

  editUser(id, data) {
    const query = User.findByIdAndUpdate(id, data);
    return query;
  }

  deleteUser(id) {
    const query = User.findByIdAndRemove(id);
    return query;
  }
}

module.exports = UserService;
