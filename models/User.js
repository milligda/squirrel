// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// ==============================================================================
// Establish the Schema
// Create the new UserSchema
// ==============================================================================

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // lastLogin: {
  //   type: Date,
  //   required: true
  // },
  // status: {
  //   type: String,
  //   required: true
  // },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
