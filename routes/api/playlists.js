// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
<<<<<<< HEAD:routes/api/collections.js
const playlist = require("../../controllers/playlist");
=======
const playlistsController = require("../../controllers/playlistsController");
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b:routes/api/playlists.js

// ==============================================================================
// Playlists API Routes
// ==============================================================================

//***** THESE ARE JUST EXAMPLES FOR NOW ****

// Matches with "/api/playlists"
router.route("/user/:userId")
<<<<<<< HEAD:routes/api/collections.js
  .get(playlist.findByUser)
  .post(playlist.create);
=======
  .get(playlistsController.findByUser)
  .post(playlistsController.create);
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b:routes/api/playlists.js

// Matches with "/api/playlists/:id"
router
  .route("/:id")
<<<<<<< HEAD:routes/api/collections.js
  .get(playlist.findById)
  .put(playlist.update)
  .delete(playlist.remove);
=======
  .get(playlistsController.findById)
  .put(playlistsController.update)
  .delete(playlistsController.remove);
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b:routes/api/playlists.js



module.exports = router;
