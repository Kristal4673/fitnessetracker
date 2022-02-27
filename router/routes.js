const Workout = require("../Models");
const router = require("express").Router();

router.route("api/workouts")
    .get((req, res) => {
        Workout.find({})
          .sort({ date: -1 })
          .then((dbWorkout) => {
            res.json(dbWorkout);
          })
          .catch((err) => {
            res.status(500).json(err);
          });
        
    })
    //endpoints where you can access the data
    .post(async(req, res) => {
        const newWorkout = await Workout.create({
          day: Date.now(),
          excercises: [],
        });
        res.json(newWorkout);
        
    })

    router.get("/api/workouts/range", (req, res) => {
      Workout.find({})
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    });

    router.put("/api/workouts/:id", async (req, res) => {
    
      const newExcercise = await Workout.findByIdAndUpdate(req.params.id, {
        exercises: req.body,
      });

      res.json(newExcercise);
    });


module.exports = router; 
