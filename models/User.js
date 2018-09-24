// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ==============================================================================
// Establish the Schema
// Create the new UserSchema
// Create the UserSchema methods required for User Authentication
// ==============================================================================

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  collection: {
    type: Schema.Types.ObjectId,
    ref: "Collection"
  },
  allVideos:[
     {
    type: Schema.Types.ObjectId,
    ref: "Video"
    }
  ]

});

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
}

// ==============================================================================
// Create the Pre-hooks for hashing the password before it is saved to the DB
// ==============================================================================

UserSchema.pre('save', function(next) {
  if (!this.password) {
    console.log('********** NO PASSWORD PROVIDED **********');
    next();
  } else {
    console.log('hashpassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
