// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const authController = require("../../controllers/authController");

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
  .post(authController.login);

// Matches with "/api/users/logout"
router.route("/logout")
  .post(authController.logout);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(authController.findById)
//   .put(authController.update)
//   .delete(authController.remove);

module.exports = router;
