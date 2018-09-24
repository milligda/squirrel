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
<<<<<<< HEAD
  playlist: [{
=======
  playlists: [{
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b
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

<<<<<<< HEAD
UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('********** NO PASSWORD PROVIDED **********');
    next();
  } else {
    console.log('hashpassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});
=======
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
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b

const User = mongoose.model("User", UserSchema);

module.exports = User;