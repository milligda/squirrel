// ==============================================================================
// Set Dependencies & Required Files
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes");
const passport = require("passport");
const mongoStore = require("connect-mongo")(session);
const dbConnection = require("./database");
const cors = require("cors");

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
// Passport Setup
// ==============================================================================
app.use(cors());
app.use(
  session({
    secret: "awwww-nuts",
    store: new mongoStore({ mongooseConnection: dbConnection }),
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ==============================================================================
// Routing - both API and views
// ==============================================================================

app.use(routes);

// ==============================================================================
// Initialize Passport Strategy
// ==============================================================================

require("./config/passport")(passport);

// ==============================================================================
// Server Listener
// ==============================================================================

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
