const path = require("path");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

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

//require(apiRoute)(app);
// require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
