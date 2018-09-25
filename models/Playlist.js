var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const PlaylistSchema = new Schema({

  userId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  description: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  private: {
    type: Boolean,
    default: true,
    required: true
  },

});

// example from the article above

// var bandSchema = new mongoose.Schema({
//   name: String,
//   lead: { type: mongoose.Schema.Types.ObjectId, ref: 'person' }
// });

var autoPopulateVideos = function(next) {
  this.populate('videos');
  next();
};

var autoPopulateUserId = function(next) {
  this.populate('userId');
  next();
};

PlaylistSchema.
  pre('findOne', autoPopulateVideos, autoPopulateUserId).
  pre('find', autoPopulateVideos, autoPopulateUserId).
  pre('findOneAndUpdate', autoPopulateVideos, autoPopulateUserId).
  pre('create', autoPopulateVideos, autoPopulateUserId).
  pre('findById', autoPopulateVideos, autoPopulateUserId);

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;

  