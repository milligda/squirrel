// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require("../../config/passport");

// ==============================================================================
// Users API Routes
// ==============================================================================

// Matches with "/api/users"
router.route("/")
  .get(authController.findAll);

// Matches with "/api/users/signup"
router.route("/signup")
  .post(authController.create);

// Matches with "/api/users/login"
router.route("/login")
  .post(
    (req, res, next) => {
      console.log("userAPI File, req.body");
      console.log(req.body)
      next()
    },
    passport.authenticate('local'),
    (req, res) => {
      console.log("logged in", req.user);
      const userInfo = {
        username: req.user.username
      }
      res.send(userInfo)
    }
  );

// Matches with "/api/users/logout"
router.route("/logout")
  .get(authController.logout);

// Matches with "/api/users/status"
router.route("/status")
  .get(authController.status);

// Matches with "/api/users/:id"
// router.route("/:id")
//   .get(authController.findById);
//   .put(authController.update)
//   .delete(authController.remove);

module.exports = router;
