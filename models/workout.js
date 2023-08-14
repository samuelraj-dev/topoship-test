import mongoose from 'mongoose'

const workoutSchema = mongoose.Schema({
    title: {
        type: String,
        requird: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Workout', workoutSchema)