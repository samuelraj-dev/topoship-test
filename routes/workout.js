import express from 'express'

import {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
} from '../controllers/workout.js'

import requireAuth from '../middlewares/requireAuth.js'

const router = express.Router()

router.use(requireAuth)

router.get('/', getAllWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)
router.patch('/:id', updateWorkout)
router.delete('/:id', deleteWorkout)

export default router