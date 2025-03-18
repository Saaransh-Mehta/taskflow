import mongoose ,{Schema} from 'mongoose';

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    priority:{
        type:String,
        enum:['Low','Medium','High'],
        default:'Medium'
    },
    status:{
        type:String,    
        enum:['Pending','In Progress','Completed'],
        default:'Pending'
    }
})


export const Task = mongoose.model('Task',taskSchema)