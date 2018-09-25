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
      .populate("playlists")
      .populate("allVideos")
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

  // user logout process
  logout: function(req, res) {
    console.log("******** Logout called ********")
    if (req.user) {
      let userId = req.user._id;     
      req.logout();
      res.json({ message: "logging out" , userId : userId });
    } else {
      res.send({ message: "no user to log out" });
    }
  }
};
