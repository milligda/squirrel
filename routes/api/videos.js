// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const videoController = require("../../controllers/videoController");

// ==============================================================================
// Videos API Routes
// ==============================================================================


// Matches with "/api/videos"
router.route("/")
  .get(videoController.findAll)
  .post(videoController.create);
  // routes below are not implemented yet
  // .put(videoController.update)
  // .delete(videoController.remove);



module.exports = router;
