var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const PlaylistSchema = new Schema({

  userId: {
    type: Number,
    required: true
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

});

const Playlist = mongoose.model("Playlist", PlaylistSchema);

module.exports = Playlist;

  