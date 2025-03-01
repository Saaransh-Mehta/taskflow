import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import { connect } from './db/db.js'
import Router from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { projectRouter } from './routes/project.routes.js'
import AIRouter from './routes/ai.routes.js'

const app = express()

connect();
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/api',Router)
app.use('/project',projectRouter)
app.use('/ai',AIRouter)


export default app