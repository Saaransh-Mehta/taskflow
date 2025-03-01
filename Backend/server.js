import app from "./app.js";
import http from "http";
import 'dotenv/config'
import cors from 'cors'
import {Server} from 'socket.io'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import { Project } from "./models/project.model.js";
import { generateContent } from "./services/gemini.service.js";



const port = process.env.PORT || 3000

const server = http.createServer(app)

const io = new Server(server,{
  cors:{
    origin:'*'
  }
})

io.use(async(socket, next)=>{
  try{
    const token = socket.handshake.auth?.token || socket.handshake.headers.authorization?.split(' ')[1];


    const projectId = socket.handshake.query.projectId

    const isProjectExist = mongoose.Types.ObjectId.isValid(projectId) 

    if(!projectId){
      return next(new Error("Project ID is not fuond in the query"))
    }

    if(!isProjectExist){
      return next(new Error("Project ID is not valid "))
    }

    socket.project = await Project.findById(projectId).lean()

    if(!token){
      return next(new Error("Token not provided"))
    }

    const decoded = jwt.verify(token,process.env.JWT_KEY)
    if(!decoded){
      return next(new Error("Token not valid"))
    }

    socket.user=decoded
    next()

  }catch(error){
    return next(new Error(error + "Error occured during socket Io connection"))
  }
})


io.on('connection',socket =>{
  console.log('user connected')

  socket.roomId = socket.project._id.toString();

  socket.join(socket.roomId)
  

  socket.on('project-message',async data =>{

    const message = String(data.message)
    
    const isAiInMessage = message.includes('@ai' || '@AI' || '@Ai' || '@aI')

    socket.broadcast.to(socket.roomId).emit('project-message',data)

    if(isAiInMessage){

      const prompt = message.replace('@ai','')

      const result = await generateContent(prompt)

      io.emit('project-message',{
        message:result,
        sender:{
          _id:'ai',
          email:'AI'
        }
      })

    
    }

   
    
  })

  
  socket.on('disconnect',()=>{
    console.log("user disconnected")
    socket.leave(socket.roomId)

  });
})

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);


app.get('/',(req,res)=>{
    res.send("Hello from the server")
})

server.listen(port,()=>{
    console.log(`Server listening on port : ${port}`)
})

