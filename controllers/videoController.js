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

  findById: function (req, res) {
    db.Video
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Video
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Video.findByIdAndRemove(req.params.id)
    //db.User.allVideos.findByIdAndRemove(req.params.id)
    //db.Collection.findByIdAndRemove(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};