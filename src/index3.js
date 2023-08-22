const express = require('express')
require('dotenv/config')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'https://topoship-test.onrender.com'

app.use(cors())

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

server()
app.get('/', (req, res) => {
    res.status(200).send("Welcome to topoship backend")
})