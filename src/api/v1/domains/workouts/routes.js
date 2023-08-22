const express = require("express");
const router = express.Router();

const {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
} = require("./controller");

const requireAuth = require("./requireAuth");

router.use(requireAuth);

router.get('/', getAllWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)
router.patch('/:id', updateWorkout)
router.delete('/:id', deleteWorkout)

module.exports = router;