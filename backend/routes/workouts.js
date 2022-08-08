const express = require("express");
const {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  getworkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const router = express.Router();

// Get all workouuts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getworkout);

//post a new workout
router.post("/", createWorkout);

//DELETE  a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
