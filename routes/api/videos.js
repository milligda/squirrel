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

// Matches with "/api/videos/delete/:id"
// Deletes all instances of the video
router.route("/delete/:id")
  .put(videoController.deleteVideo);

// Matches with "/api/videos/remove/:videoId/:playlistId"
router.route("/remove/:videoId/:playlistId")
  .put(videoController.removeVideo);

router.route("/save/:id")
  .post(videoController.scrapeAndSave);

// router.route("/:id")
//   .get(videoController.findById)
//   .delete(videoController.remove);

// router.route("/:playlistId/:videoId")
//   .delete(videoController.delete);

module.exports = router;
