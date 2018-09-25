var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const PlaylistSchema = new Schema({

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
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
  selected: {
    type: Boolean,
    default: false,
    required: true
  },
  key: {
    type: String,
    required: true,
    default: 'playlist'
  }

});

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;

  