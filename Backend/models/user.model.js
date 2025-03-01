import mongoose,{Schema} from "mongoose";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:[6,"Email must be 6 characters long"]
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Password must be 8 characters long"],
        select:false
    },
    token:{
        type:String
    }
})

userSchema.static('hashPassword',async function(password){
    const hashedPassword = await bcryptjs.hash(password,10)
    return hashedPassword
})

userSchema.methods.generateJWT = function(){
    return jwt.sign({email:this.email},process.env.JWT_KEY)
}

userSchema.methods.comparePassword = async function(password){
    return await bcryptjs.compare(password,this.password)
}

export const User = mongoose.model('User',userSchema)