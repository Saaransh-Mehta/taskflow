import mongoose from "mongoose";
import { Project } from "../models/project.model.js";

export const createProject = async({name,userId})=>{
    if(!name){
        throw new Error("Name is required for creating a project")
    }
    if(!userId){
        throw new Error("One User is required for creating a project")
    }

    const project = await Project.create({name,users:[userId]})
   
    return project
}

export const getAllUserById = async({userId})=>{
    if(!userId){
        throw new Error("User Id is required for getting all projects")
    }

    const allUserProject = await Project.find({
        users: userId
    })

    return allUserProject
}

export const addUsersToProject = async({projectId,users,userId})=>{

    if(!userId){
        throw new Error("User Id not found")
    }
    if(!mongoose.Types.ObjectId.isValid(userId)){
        throw new Error("Invalid User Id")
    }


    if(!users){
        throw new Error("Users not found")
    }
    if(!Array.isArray(users) ){
        throw new Error("Users should be an array")
    }
    if(!projectId){
        throw new Error("Project Id not found")
    }

    if(!mongoose.Types.ObjectId.isValid(projectId)){
        throw new Error("Invalid Project Id")
    }


    const projects = await Project.findOne({
        _id:projectId,
        users:userId
    })

    if(!projects){
        throw new Error("Unauthorized Access")
    }

    const updatedProject = await Project.findOneAndUpdate({
        _id:projectId
    },{
        $addToSet:{
            users:{
                $each:users
            }
        }
    },{
        new:true
    })
    return updatedProject

}