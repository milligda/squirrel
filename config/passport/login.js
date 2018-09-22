// ==============================================================================
// Set Dependencies
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");

// ==============================================================================
// Set up the PassPort Login Strategies
// ==============================================================================

module.exports = function(passport) {

  const isValidPassword = (user, password) => {
    bCrypt.compareSync(password, user.password);
  };

  // passport login strategy
  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
          if (err) return done(err);
          if (!user) {
            console.log(`User Not Found with username ${username}`);
            return done(null, false, req.flash("message", "User not found."));
          }
          if (!isValidPassword(user, password)) {
            console.log("Invalid Password");
            return done(null, false, req.flash("message", "Invalid password"));
          }
          return done(null, user);
        });
      }
    )
  );
};
