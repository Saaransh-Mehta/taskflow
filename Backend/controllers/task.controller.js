import mongoose from "mongoose";
import Task from "../models/task.model.js";

const createTask = async (req,res)=>{
        const {title,assignedTo,priority,status} = req.body
        console.log(title,assignedTo,priority,status)

        if(!title || !assignedTo || !priority || !status){
            return res.status(400).json({message:"All fields are required"})
        }
        try{
            const task = await Task.create({title,assignedTo,priority,status})
            return res.status(201).json({task})
        }catch(error){
            return res.status(500).json({message:"Error creating task"})
        }
}