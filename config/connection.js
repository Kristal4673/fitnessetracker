
const mongoose =require('mongoose')

// returns a promise
function connectDB() {
  mongoose
    .connect(
      "mongodb+srv://puresoft:Cs232889$@cluster0.eacyz.mongodb.net/FitNessedb?retryWrites=true&w=majority"
    )
    .then((data) => {
      console.log("The database was connected!");
    })
    .catch((error) => {
      console.log("This Database connections NOT CONNECTED! ");
    });
}

export { connectDB };
