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
    },
    user_id: {
      type: String,
      requird: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Workout', workoutSchema)