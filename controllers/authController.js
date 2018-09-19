// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");

// ==============================================================================
// Methods for authController
// ==============================================================================

module.exports = {
  findAll: function(req, res) {
    db.User.find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  }
};
