var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  userNameFirst: {
    type: String,
    required: true
  },
  userNameLast: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  userPassword: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  },

});

var User = mongoose.model("User", UserSchema);

module.exports = User;
