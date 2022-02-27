
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutModelSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        trim: true,
        type: String,
        required: true,
      },
      name: {
        trim: true,
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const workoutModel = mongoose.model("workoutModel", workoutModelSchema);

module.exports = workoutModel;
