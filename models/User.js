// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const mongoose = require("mongoose");

// ==============================================================================
// Establish the Schema
// Create the new UserSchema
// ==============================================================================

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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

const User = mongoose.model("User", UserSchema);

module.exports = User;
