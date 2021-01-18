const mongoose = require(`mongoose`);
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);