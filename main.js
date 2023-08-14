import express from 'express'
import 'dotenv/config'

import { connectDB } from './db.js'

import workoutsRoutes from './routes/workout.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})
app.use(express.json())

const server = () => {
    app.listen(PORT, () => {
        console.log(`server running at PORT:${PORT}`)
    })
}

connectDB(server)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to topoship backend")
})
app.use('/api/v1/workouts', workoutsRoutes)