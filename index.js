import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ status: 'success', message: 'Welcome to proshop backend' })
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Magic happens on port ${PORT} in ${ENV}`)
})
