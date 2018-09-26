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
  imageUrl: {
    type: String,
    required: false
  },
  selected: {
    type: Boolean,
    default: false,
    required: true
  },
  key: {
    type: String,
    required: true,
    default: 'video'
  }
  // playlists: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Playlist"
  // }]
});



VideoSchema.pre('remove', function(next) {
  // Remove all the collection docs that reference the removed video.
  this.model('Playlist').remove({ video: this._id }, next);
});

var Video = mongoose.model("Video", VideoSchema);

module.exports = Video;