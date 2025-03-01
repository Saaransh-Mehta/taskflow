import { Project } from "../models/project.model.js";
import { createProject, getAllUserById , addUsersToProject } from "../services/project.service.js";
import { User } from "../models/user.model.js";

const createProjectController = async (req, res) => {
  try {
    const { name } = req.body;
    const loggedInUser = await User.findOne({ email: req.user.email });
    const userId = loggedInUser._id;
    const project = await createProject({ name, userId });
    return res.status(201).json({ project });
  } catch (err) {
    throw new Error("Error in creating project " + err);
  }
};


const getAllProject = async(req,res)=>{
  try{

    const loggedInUser = await User.findOne({
        email:req.user.email
    })

    if(!loggedInUser){
      throw new Error("User not found Log in first to continue")
    }

  const allUserProjects = await getAllUserById({userId:loggedInUser._id})

  return res.status(200).json({allUserProjects})


  }catch(error){
    console.log("Error occured while getting user " + error)
  }

}

const addUserToProject = async(req,res)=>{
  try {
    const {projectId,users,userId} = req.body
    const loggedInUser = await User.findOne({
      email:req.user.email
    })

    const project = await addUsersToProject({
      projectId,
      users,
      userId:loggedInUser._id
    })

    return res.status(200).json({
      project:project
    })
    
  } catch (error) {
    throw new Error("Error occured while adding user to project " + error)
  }
}

const getProjectById = async(req,res)=>{

  try {
    
    const {projectId} = req.params
    if(!projectId){
      throw new Error("Error while getting ID from params ")
    }
    const project = await Project.findOne({
      _id:projectId
    }).populate("users")

    return res.status(200).json({message:"Data fetched successfully", data:project})
  } catch (error) {
    throw new Error("Error while fethcing details of project " + error)
  }
}
export { createProjectController,getAllProject,addUserToProject,getProjectById };
