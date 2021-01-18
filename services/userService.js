const User = require(`./../models/userModel`);

class UserService {
  getUser() {
    const query = User.find().exec();
    return query;
  }

  getByName(name) {
    const query = User.findOne({ name }).exec();

    return query;
  }
}

module.exports = UserService;
