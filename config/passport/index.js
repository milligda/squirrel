// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const passport = require("passport");
const localSignup = require("./LocalSignup");
const User = require("../../models/User");

// ==============================================================================
// Passport Methods
// ==============================================================================

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
    console.log('*** serializeUser called, user: ');
	console.log(user);
    console.log('---------');
    done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
    console.log('DeserializeUser called');
    User.findOne(
        { _id: id },
        'userEmail',
        (err, user) => {
            console.log('*** Deserialize user, user:');
			console.log(user);
			console.log('--------------');
			done(null, user);
        }
    )
});

passport.use(localSignup);

module.exports = passport;
