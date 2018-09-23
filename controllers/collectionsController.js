// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");

// ==============================================================================
// Methods for collectionsController
// ==============================================================================

module.exports = {
  //Not sure we need a findAll method for collections, but leaving here just in case
  // findAll: function(req, res) {
  //   db.Collection.find({})
  //     .then(dbResponse => res.json(dbResponse))
  //     .catch(err => res.status(422).json(err));
  //},

  findByUser: function (req, res) {
    db.Collection
      .find({
        "userId": req.params.id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log(req.body);
    db.Collection
      .create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Collection
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Collection
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Collection
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  delete: function (req, res) {

    let userId = req.params.id;
    let videoId = req.body.videoId;

    db.User.allVideos.findByIdAndRemove(videoId)

    db.Collection.findByIdAndRemove(videoId)

       .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};