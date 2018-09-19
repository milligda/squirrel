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
        usernameField: 'userEmail'
    },
    function (username, password, done) {
        User.findOne({ userEmail: username }, (err, res) => {
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
