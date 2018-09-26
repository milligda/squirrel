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
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  playlists: [{
    type: Schema.Types.ObjectId,
    ref: "Playlist"
  }],
  allVideos: [{
    type: Schema.Types.ObjectId,
    ref: "Video"
  }]

});

// ==============================================================================
// Create the Pre-hooks for hashing the password before it is saved to the DB
// ==============================================================================

// UserSchema.pre('save', function (next) {
//   if (!this.password) {
//     console.log('********** NO PASSWORD PROVIDED **********');
//     next();
//   } else {
//     console.log('hashpassword in pre save');
//     this.password = this.hashPassword(this.password);
//     next();
//   }
// });

var autoPopulatePlaylist = function (next) {
  this.populate('playlists');
  next();
};

var autoPopulateAllVideos = function (next) {
  this.populate('allVideos');
  next();
};



UserSchema.
pre('findOne', autoPopulateAllVideos, autoPopulatePlaylist).
pre('find', autoPopulateAllVideos, autoPopulatePlaylist).
pre('findOneAndUpdate', autoPopulateAllVideos, autoPopulatePlaylist).
pre('create', autoPopulateAllVideos, autoPopulatePlaylist).
pre('findById', autoPopulateAllVideos, autoPopulatePlaylist);

const User = mongoose.model("User", UserSchema);

module.exports = User;