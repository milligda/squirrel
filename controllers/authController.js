// ==============================================================================
// Set Dependencies
// ==============================================================================

const db = require("../models");
const passport = require("../config/passport");

// ==============================================================================
// Methods for authController
// ==============================================================================

module.exports = {
  
  // find all users
  findAll: function(req, res) {
    db.User.find({})
      .then(dbResponse => res.json(dbResponse))
      .catch(err => res.status(422).json(err));
  },

  // user status is checked for setting the App.js state
  status: function(req, res) {
    // create id and status variables
    let id;
    let status;

    // check if req.user exists and store the corresponding data
    if (!req.user) {
      id = "";
      status = false;
    } else {
      id = req.user._id;
      status = req.isAuthenticated();
    }

    // create the status object
    const statusObj = {
      userId: id,
      loggedIn: status
    }
    // respond with the statusObj
    res.json(statusObj);
  },

  // user signup process
  create: function(req, res) {
    // store the username and password from req.body
    const { username, password } = req.body;

    // First - verify that the username does not already exist
    // Then - create the user if the email does not already exist
    db.User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log(err);
      } else if (user) {
        res.json({
          error: `Sorry, there is already a user with email: ${username}`
        })
      } else {
        db.User.create(req.body)
        .then(dbResponse => res.json(dbResponse))
        .catch(err => res.status(422).json(err));
      }
    });
  },

  // user logout process
  logout: function(req, res) {
    console.log("******** Logout called ********")
    if (req.user) {
      req.logout();
      res.send({ message: "logging out" });
    } else {
      res.send({ message: "no user to log out" });
    }
  }
};
