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
    // store the userEmail and userPassword from req.body
    const { userEmail, userPassword } = req.body;

    // First - verify that the userEmail does not already exist
    // Then - create the user if the email does not already exist
    db.User.findOne({ userEmail: userEmail }, (err, user) => {
      if (err) {
        console.log(err);
      } else if (user) {
        res.json({
          error: `Sorry, there is already a user with email: ${userEmail}`
        })
      } else {
        db.User.create(req.body)
        .then(dbResponse => res.json(dbResponse))
        .catch(err => res.status(422).json(err));
      }
    });
  },
  login: function(req, res) {
    passport.authenticate("local"),
    () => {
      console.log('logged in', req.user);
      const userInfo = {
        username: req.user.username
      };
      res.send(userInfo);
    }
  },
  logout: function(req, res) {
    if (req.user) {
      req.logout();
      res.send({ message: "logging out" });
    } else {
      res.send({ message: "no user to log out" });
    }
  }
};
