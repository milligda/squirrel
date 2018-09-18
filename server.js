// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
// const path = require("path");

// ==============================================================================
// Express & Middleware Setup
// ==============================================================================

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ==============================================================================
// Passport Setup - to come
// ==============================================================================



// ==============================================================================
// Routing - both API and views
// ==============================================================================

app.use(routes);

// ==============================================================================
// Database Connection - Mongo DB
// ==============================================================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/squirrel");

// ==============================================================================
// Server Listener
// ==============================================================================

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
