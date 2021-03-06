const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Setup http logger Morgan
app.use(logger("dev"));

//Set up mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});