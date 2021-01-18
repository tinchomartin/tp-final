const mongoose = require(`mongoose`);
const MovieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
