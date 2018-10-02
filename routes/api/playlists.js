// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const playlistsController = require("../../controllers/playlistsController");

// ==============================================================================
// Playlists API Routes
// ==============================================================================

//***** THESE ARE JUST EXAMPLES FOR NOW ****

// Matches with "/api/playlists"
router.route("/")
.get(playlistsController.findAll);

// Matches with "/api/playlists/new"
router.route("/new")
  .post(playlistsController.createNew);

// Matches with "/api/playlists/data/:id"
router.route("/data/:id")
  .get(playlistsController.findById);

router.route("/user/:userId")
  .get(playlistsController.findByUser)
  .post(playlistsController.create);

  // Matches with "/api/playlists/remove/:playlistId/:userId"
router.route("/remove/:playlistId/:userId")
  .put(playlistsController.remove);

// Matches with "/api/playlists/:id"
router
  .route("/:id")
  .get(playlistsController.findById)
  .put(playlistsController.update)
  .delete(playlistsController.delete);

module.exports = router;
