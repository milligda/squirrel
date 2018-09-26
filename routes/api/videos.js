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

router.route("/external")
  .post(videoController.createExternal)
  .put(videoController.addUserVid);

router.route("/:id")
  .get(videoController.findById)
  .delete(videoController.remove);

router.route("/save/:id")
  .post(videoController.scrapeAndSave);

module.exports = router;
