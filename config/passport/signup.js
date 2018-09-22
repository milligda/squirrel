// ==============================================================================
// Set Dependencies
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");

// ==============================================================================
// Set up the PassPort Signup Strategies
// ==============================================================================

module.exports = function(passport) {

  function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

  // passport signup strategy
  passport.use(
    "signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        findOrCreateUser = () => {
          User.findOne({ username: username }, (err, user) => {
            if (err) {
              console.log("Error in Signup: " + err);
              return done(err);
            }
            if (user) {
              console.log("User already exists");
              return done(
                null,
                false,
                req.flash("message", "User already exists")
              );
            } else {
              const newUser = new User();
              const hashPassword = createHash(password);
              
              newUser.username = username;
              newUser.password = hashPassword;

              console.log("***********************************");
              console.log(hashPassword);
              console.log("***********************************");
              console.log(newUser);

              newUser.save(err => {
                if (err) {
                  console.log(`Error in saving user: ${err}`);
                  throw err;
                }
                console.log("User Registration successful");
                return done(null, newUser);
              });
            }
          });
        };

        process.nextTick(findOrCreateUser);
      }
    )
  );
};
