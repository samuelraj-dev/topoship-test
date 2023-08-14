import express from 'express'
import 'dotenv/config'

import { connectDB } from './db.js'

import workoutsRoutes from './routes/workout.js'

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})
app.use(express.json())

const server = () => {
    app.listen(PORT, HOST, () => {
        console.log(`server running at http://${HOST}:${PORT}`)
    })
}

connectDB(server)
app.get('/', (req, res) => {
    res.status(200).send("Welcome to topoship backend")
})
app.use('/api/v1/workouts', workoutsRoutes)