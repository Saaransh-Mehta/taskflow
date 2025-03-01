import { User } from "../models/user.model.js";

const createUser = async({username,email,password})=>{

    if(!email || !password || !username){
        throw new Error("All fields are required" + Error)
    }
    const hashedPassword = await User.hashPassword(password)
    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })

    return user
}



export {createUser}