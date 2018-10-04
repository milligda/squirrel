// ==============================================================================
// Set Dependencies
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const Playlist = require("../../models/Playlist");

// ==============================================================================
// Set up the PassPort Signup Strategies
// ==============================================================================

module.exports = function(passport) {
  const createHash = function(password) {
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
                {message: "User exists error"}
                // res.data("User already exists")
                // req.flash("message", "User already exists")
              );
            } else {
              const newUser = new User();
              const newPlaylist = new Playlist();
              const hashPassword = createHash(password);

              // add the data to the newUser object
              newUser.username = username;
              newUser.password = hashPassword;

              // create new User account in database
              newUser.save(err => {
                if (err) {
                  console.log(`Error in saving user: ${err}`);
                  throw err;
                }

                // add the data to the User's All Videos Playlist
                newPlaylist.userId = newUser._id;
                newPlaylist.title = "All Videos";
                newPlaylist.description = "";
                newPlaylist.private = true;

                // create the new Playlist
                newPlaylist.save(err => {
                  if (err) {
                    console.log(`Error in saving All Videos playlist: ${err}`);
                    throw err;
                  }

                  // after the user has been created and the playlist has been created
                  // update the user data with the playlist
                  User.findByIdAndUpdate(
                    newUser._id,
                    { $push: { playlists: newPlaylist._id } },
                    { new: true },
                    err => {
                      if (err) {
                        console.log(`Error in updating user data: ${err}`);
                        throw err;
                      }
                      return done(null, newUser);
                    }
                  );
                });
              });
            }
          });
        };

        process.nextTick(findOrCreateUser);
      }
    )
  );
};