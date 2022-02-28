const path = require("path");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const api = require("./router/routes");

const PORT = process.env.PORT || 3004;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutModel",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
app.use(api)
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
  });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
