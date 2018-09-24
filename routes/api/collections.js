// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const playlist = require("../../controllers/playlist");

// ==============================================================================
// Playlists API Routes
// ==============================================================================

//***** THESE ARE JUST EXAMPLES FOR NOW ****

// Matches with "/api/playlists"
router.route("/user/:userId")
  .get(playlist.findByUser)
  .post(playlist.create);

// Matches with "/api/playlists/:id"
router
  .route("/:id")
  .get(playlist.findById)
  .put(playlist.update)
  .delete(playlist.remove);



module.exports = router;
