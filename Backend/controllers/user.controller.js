import { User } from "../models/user.model.js";
import mongoose from "mongoose";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
import bcryptjs from 'bcryptjs'
// import redisClient from "../services/redis.service.js";

const createUserController = async (req,res)=>{

    try{
        const {email,password,username} = req.body
        console.log(email,password,username)
        const user = await createUser({email,password,username})

        const token = await user.generateJWT()
        user.token = token
        await user.save()
        user._doc.password = undefined
        return res.status(200).json({user,token})
        

    }
    catch(error){
        throw new Error("Error occured during creating a user" + error)
    }
}

const loginUserController = async(req,res)=>{
    try {
     const {email,password} = req.body
     if(!email || !password){
        throw new Error("All fields are required" + Error)
     }

     const user = await User.findOne({email}).select('+password')
     if(!user){
        throw new Error("Unable to login")
     }

     const isPasswordCorrect = await bcryptjs.compare(password,user.password)

     if(!isPasswordCorrect){
        throw new Error("Enter valid Password please")
     }
    user._doc.password = undefined
    const token = user.generateJWT(user.email);
    
     return res.cookie('token',token,{
        httpOnly:true
     }).status(200).json({user,token})
    } catch (error) {
        throw new Error("Error occured during login a user" + error)
    }
}

const logoutUser = async(req,res)=>{
    try{
        const token= req.cookies.token
        res.clearCookie('token')
        
        // redisClient.set(token,'logout','EX',60*60*24)
        return res.status(201).json({message:"Logged out successfully"})

    }catch(error){
        throw new Error("Error occured during logout a user" + error.message)
    }
}


const profileController = async(req,res)=>{
    try{
        const user = req.user
        return res.status(200).json({user})
    }catch(error){
        throw new Error("Unauthorised Access" + error.message)
    }
}


const getAllUsers = async(req,res)=>{
try {

    const loggedInUser = await User.findOne({
        email:req.user.email
    })

    const allUsers = await User.find({
        _id:{$ne:loggedInUser._id}
    }).select("-password")    
    return res.status(200).json({allUsers})
    
} catch (error) {
    throw new Error("Error occured while getting all users " + error)
}

}
export {getAllUsers,createUserController,loginUserController,logoutUser,profileController}