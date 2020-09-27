const mongoose = require("mongoose");
const uuid = require("uuid");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userID: {
    type: String,
    default: uuid.v4()
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);


