// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");

// ==============================================================================
// Methods for videoController
// ==============================================================================

module.exports = {
  findAll: function (req, res) {
    db.Video
      .find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    db.Video
      .create(req.body)
    db.User.allVideos
      .create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  createExternal: function (req, res) {
    console.log(req.body)
    db.Video
      .create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  addUserVid: function (req, res) {
    console.log(req.body)
    db.User
      .findOneAndUpdate({
        _id: req.body.userId
      }, {
        $addToSet: {
          allVideos: req.body.vidId
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  findById: function (req, res) {
    db.Video
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //removing a video finds all instances of the video in all collections and removes it from any collection where it exists.  it also removes the video from the user's "all videos" list.
  remove: function (req, res) {
    db.User.update({}, {
        $pull: {
          allVideos: req.params.id
        }
      }, {
        multi: true
      }).then(
        db.Playlist.update({}, {
          $pull: {
            videos: req.params.id
          }
        }, {
          multi: true
        })).then(
        db.Video
        .findByIdAndRemove({
          _id: req.params.id
        }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //deleting a video will only delete it from the collection you're currently in.  this functionality will only be available from inside a collecction
  delete: function (req, res) {
    db.Playlist.update({_id: req.params.playlistId}, {$pull: {videos: req.body.videoId}}, )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // getRecentVids: function (req, res) {

  //   db.Playlist.findById(req.params.id)
  //     .then(
  //       .skip(0).limit(10).sort({
  //       $natural: -1
  //     }))
  //     .catch(err => res.status(422).json(err));
  // }

  

};