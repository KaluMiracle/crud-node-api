
import dotenv from 'dotenv'
dotenv.config()

import express, { json } from 'express'
const app = express()
import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(json())

import postsRouter from './routes/post.js'
app.use('/posts', postsRouter)

app.listen(3000, () => console.log('Server Started'))