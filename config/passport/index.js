// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const passport = require("passport");
const LocalStrategy = require("./LocalStrategy");
const User = require("../../models/User");

// ==============================================================================
// Passport Methods
// ==============================================================================

// called on login, saves the id to session req.session.passport.user = {id:'..'}
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

passport.use(LocalStrategy);



module.exports = passport;
