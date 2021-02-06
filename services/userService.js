const User = require(`./../models/userModel`);

class UserService {
  getUser() {
    const query = User.find().exec();
    return query;
  }

  getUserById(id) {
    const query = User.findById(id).exec();

    return query;
  }

  checkUser(name) {
    const query = User.exists({ name: name });
    return query;
  }

  addUser(body) {
    const query = new User(body);
    return query.save();
  }
}

module.exports = UserService;
