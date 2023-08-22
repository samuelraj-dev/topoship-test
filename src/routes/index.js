const express = require("express");
const router = express.Router();

const userRoutes = require("../domains/user");
const workoutRoutes = require("../domains/workouts");

router.use("/api/v1/user", userRoutes);
router.use("/api/v1/workouts", workoutRoutes);

module.exports = router;