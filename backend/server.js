import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import colors from 'colors'
import connectDB from './config/db.js'
import routes from "./routes/index.js"

const PORT = process.env.PORT || 5020

dotenv.config()

connectDB()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('API is running...')
})

app.use(routes)

app.use('/uploads', express.static('uploads'))
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))