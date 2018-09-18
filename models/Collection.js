var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const CollectionSchema = new Schema({

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

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;

  