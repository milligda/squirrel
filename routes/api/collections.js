// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const collectionsController = require("../../controllers/collectionsController");

// ==============================================================================
// Collections API Routes
// ==============================================================================

//***** THESE ARE JUST EXAMPLES FOR NOW ****

// Matches with "/api/collections"
router.route("/user/:userId")
  .get(collectionsController.findByUser)
  .post(collectionsController.create);

// Matches with "/api/collections/:id"
router
  .route("/:id")
  .get(collectionsController.findById)
  .put(collectionsController.update)
  .delete(collectionsController.remove);



module.exports = router;
