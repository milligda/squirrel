// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const videoController = require("../../controllers/videoController");

// ==============================================================================
// Videos API Routes
// ==============================================================================

//***** THESE ARE JUST EXAMPLES FOR NOW ****

// Matches with "/api/collections"
router.route("/")
  .get(videoController.findAll)
  .post(videoController.create);

// Matches with "/api/collections/:id"
// router
  // .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);



module.exports = router;
