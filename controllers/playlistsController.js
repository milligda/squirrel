// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");

// ==============================================================================
// Methods for playlistsController
// ==============================================================================

module.exports = {
  //Not sure we need a findAll method for playlists, but leaving here just in case
  findAll: function(req, res) {
    db.Playlist.find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  findByUser: function (req, res) {
    db.Playlist
      .find({
        userId: req.params.userId
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log(req.body);
    db.Playlist
      .create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  createNew: function (req, res) {
    console.log(req.body);
    db.Playlist.create(req.body.playlist)
      .then(newPlaylist => {
        db.User.findByIdAndUpdate(req.body.userId, { $push: { playlists: newPlaylist._id }}, { new: true })
        .then(dbUser => {
          res.json(dbUser);
        })
        .catch(err => {
          console.log("Error updating the User document");
          res.json(err);
        });
      })
      .catch(err => {
        console.log("Error creating the new playlist");
        res.json(err);
      })
  },

  findById: function (req, res) {
    db.Playlist
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Playlist.findByIdAndUpdate(req.params.playlistId, { $set: req.body }, { new: true })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.User.findByIdAndUpdate(req.params.userId, { $pull: { playlists: req.params.playlistId }})
      .then(function(dbUser) {
        db.Playlist.findByIdAndRemove(req.params.playlistId)
          .then(function(dbPlaylist) {
            res.json(dbPlaylist)
          })
          .catch(function(err) {
            console.log("Error deleting the playlist");
            res.json(err);
          });
      })
      .catch(function(err) {
        console.log("Error removing playlist from user document");
        res.json(err);
      });
  },

  delete: function (req, res) {
    db.Playlist
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};