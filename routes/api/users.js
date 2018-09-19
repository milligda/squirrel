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
  .get(authController.findAll)
  .post(authController.create);

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(authController.findById)
//   .put(authController.update)
//   .delete(authController.remove);

module.exports = router;
