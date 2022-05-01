const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/recipes', require('./routes/recipeRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server is Starting ${port}`))


