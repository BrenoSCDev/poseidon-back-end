const express = require("express")
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const connectDatabase = require("./config/dbConn")
const cors = require("cors")
const corsOptions = require("./config/corsConfig")
require('dotenv').config()
const routes = require('./routes/routes')


connectDatabase()
const app = express()
const port = 3000


routes(app)

app.use(cors(corsOptions))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Server running on port ${port}`))
})

mongoose.connection.on('error', err => {
    console.error(err)
})
