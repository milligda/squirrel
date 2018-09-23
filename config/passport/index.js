// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const login = require("./login");
const signup = require("./signup");
const User = require("../../models/User");

// ==============================================================================
// Passport Export
// ==============================================================================

module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        console.log('*** serializeUser called, user: ')
        console.log(user)
        console.log('---------')
        done(null, user._id)
    });

    passport.deserializeUser((id, done) => {
        console.log('DeserializeUser called');
        User.findById(id,
            (err, user) => {
                console.log('*** Deserialize user, user:')
                console.log(user)
                console.log('--------------')
                done(err, user)
            }
        )
    });

    login(passport);
    signup(passport);
}
