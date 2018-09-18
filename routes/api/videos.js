// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// ==============================================================================
// Videos API Routes
// ==============================================================================

/***** THESE ARE JUST EXAMPLES FOR NOW ****

// Matches with "/api/collections"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/collections/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

*/

module.exports = router;
