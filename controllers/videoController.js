// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");

// ==============================================================================
// Methods for authController
// ==============================================================================

module.exports = {
  findAll: function(req, res) {
    db.Video.find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Video.create(req.body)
      .then(dbResponse => res.json(dbResponse))
      // console.log(dbResponse))
      .catch(err => res.status(422).json(err));
  }
};
