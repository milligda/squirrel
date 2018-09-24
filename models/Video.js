var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var VideoSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  videoPlatform: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  videoId: {
    type: String,
    required: true
  },
  playlists: [{
    type: Schema.Types.ObjectId,
    ref: "Playlist"
  }]
});

var Video = mongoose.model("Video", VideoSchema);

module.exports = Video;