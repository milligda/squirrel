// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");

// ==============================================================================
<<<<<<< HEAD:controllers/collectionsController.js
// Methods for PlaylistsController
// ==============================================================================

module.exports = {
  //Not sure we need a findAll method for Playlists, but leaving here just in case
=======
// Methods for playlistsController
// ==============================================================================

module.exports = {
  //Not sure we need a findAll method for playlists, but leaving here just in case
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b:controllers/playlistsController.js
  // findAll: function(req, res) {
  //   db.Playlist.find({})
  //     .then(dbResponse => res.json(dbResponse))
  //     .catch(err => res.status(422).json(err));
  //},

  findByUser: function (req, res) {
    db.Playlist
      .find({
        "userId": req.params.id
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

  findById: function (req, res) {
    db.Playlist
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Playlist
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Playlist
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};