// ==============================================================================
// Set Dependencies
// ==============================================================================

const router = require("express").Router();
const userRoutes = require("./users");
const collectionRoutes = require("./collections");
const videoRoutes = require("./videos");

// ==============================================================================
// Set Routes
// ==============================================================================

router.use("/users", userRoutes);
router.use("/collections", collectionRoutes);
router.use("/videos", videoRoutes);

module.exports = router;
