// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const User = require("../../models/User");
const LocalStrategy = require("passport-local").Strategy;

// ==============================================================================
// Create a new local signup strategy
// ==============================================================================

const strategy = new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },

    function (username, password, done) {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: "Incorrect email" });
            }
            if (!user.checkPassword(password)) {
                return done(null, false, { message: "Incorrect password" });
            }
            return done(null, user);
        });
    }
);

module.exports = strategy;
