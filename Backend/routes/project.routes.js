import express from 'express'
import { createProjectController , getAllProject , addUserToProject,getProjectById} from '../controllers/project.controller.js'
import { authUser } from '../middleware/auth.js'

const projectRouter = express.Router()

projectRouter.post('/create',authUser,createProjectController)
projectRouter.get('/all',authUser,getAllProject)
projectRouter.put('/add-user',authUser,addUserToProject)
projectRouter.get('/get-project/:projectId', authUser,getProjectById)

export {projectRouter}