// ==============================================================================
// Set Dependencies & Set Promise Library
// ==============================================================================

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// ==============================================================================
// Create Mongoose Connection
// ==============================================================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/squirrel");

module.exports = mongoose.connection;
