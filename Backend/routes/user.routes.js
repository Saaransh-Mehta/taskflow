import express from 'express'
import { createUserController,getAllUsers,loginUserController,logoutUser,profileController } from '../controllers/user.controller.js'
import { authUser } from '../middleware/auth.js'
const Router = express.Router()

Router.post('/register',createUserController)
Router.post('/login',loginUserController,authUser)
Router.post('/logout',authUser,logoutUser)
Router.get('/profile',authUser,profileController)
Router.get('/all',authUser,getAllUsers)


export default Router