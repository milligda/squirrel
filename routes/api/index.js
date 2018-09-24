// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const userRoutes = require("./users");
const playlistRoutes = require("./playlists");
const videoRoutes = require("./videos");

// ==============================================================================
// Set Routes
// ==============================================================================

router.use("/users", userRoutes);
router.use("/playlists", playlistRoutes);
router.use("/videos", videoRoutes);

module.exports = router;