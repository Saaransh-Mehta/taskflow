import mongoose, { Schema } from 'mongoose'

const projectSchema = new Schema({
    name:{
        type:String,
        unique:[true,"Project name should be unique"],
        lowercase:true,
        required:true,
        trim:true
    },
    users:[
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    ]
})


export const Project = mongoose.model('project',projectSchema)