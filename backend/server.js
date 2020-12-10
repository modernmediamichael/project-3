import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import imageRoutes from './routes/API/image.js'

import productRoutes from './routes/productRoutes.js'

const PORT = process.env.PORT || 5010

dotenv.config()

connectDB()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/image', imageRoutes)

app.use('/uploads', express.static('uploads'))
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))