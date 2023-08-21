import mongoose from 'mongoose'
import Workout from '../models/workout.js'

const getAllWorkouts = async (req, res) => {

    const user_id = req.user._id
    
    try {
        const workouts = await Workout.find({ user_id }).sort( { createdAt: -1 } )
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getWorkout = async (req, res) => {

    const { id } = req.params
    const user_id = req.user._id

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({ error: `given ID is not of correct format` })
    }

    const workout = await Workout.findOne({ _id: id, user_id })

    if(!workout){
        return res.status(404).json({ error: `no such ID found` })
    }

    res.status(200).json(workout)
}

const createWorkout = async (req, res) => {

    const { title, reps, load } = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const user_id = req.user._id
        const workout = await Workout.create({ title, reps, load, user_id })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })   
    }
}

const updateWorkout = async (req, res) => {

    const { id } = req.params

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({ error: `given ID is not of correct format` })
    }    
    
    const workout = await Workout.findByIdAndUpdate(id, { ...req.body }, { new: true })

    if(!workout){
        return res.status(404).json({ error: `no such ID found` })
    }

    res.status(200).json(workout)
}

const deleteWorkout = async (req, res) => {
    
    const { id } = req.params

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({ error: `given ID is not of correct format` })
    }
    
    const workout = await Workout.findByIdAndDelete(id)

    if(!workout){
        return res.status(404).json({ error: `no such ID found` })
    }

    res.status(200).json(workout)
}

export {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
}