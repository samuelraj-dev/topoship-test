import mongoose from 'mongoose'

export const connectDB = async (server) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to mongodb...`)
    } catch (error) {
        console.log('Problem connecting to mongodb...')
        process.exit(1)
    }
    server()
}