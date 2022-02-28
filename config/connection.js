const mongoose = require("mongoose");

// returns a promise
function connectDB() {
  mongoose
    .connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://puresoft:Cs232889$@cluster0.b9a9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((data) => {
      console.log("The database was connected!");
    })
    .catch((error) => {
      console.log("This Database connections NOT CONNECTED! ");
    });
}

export { connectDB };
