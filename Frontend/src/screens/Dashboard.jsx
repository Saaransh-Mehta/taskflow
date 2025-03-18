import React, { useState , useContext, useEffect } from 'react';
import { UserContext } from '../context/user.context.jsx';
import axios from '../config/axios.js';
import {toast,Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [projects,setProjects] = useState([])
  const navigate = useNavigate()
  const handleCloseModal = () => {
    setModal(false);
    setName('');
  };

  useEffect(()=>{
    axios.get('/project/all').then((res)=>{
    console.log(res.data.allUserProjects[0].name)
      setProjects(res.data.allUserProjects)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Creating Project', name);
    const response = await axios.post('/project/create',{
      name
    })
    .then((response) => {
      console.log(response.data);
      toast.success('Project created successfully');
      console.log(response.data);
      handleCloseModal();
    }).catch((error) => {
      toast.error('Error creating project');
      console.log(error);
    });
   
  };

  return (
    <main className="p-4 ">
      <Toaster position='top-center'/>
      <div className="projects gap-5 ">
        <button className="project border  bg- border-slate-300 rounded p-3 text-black" onClick={() => setModal(true)}>
          New Project
          <i className="p-1 ri-link"></i>
        </button>
        <div className='flex gap-10 mt-6'>

        {
          projects.map((project,index)=>{
            // console.log(project)
            return(
              <div className='flex  flex-col gap-4 border border-slate-300 rounded p-3 w-[500px] h-[400px] text-black hover:bg-slate-200 transition'
              onClick={()=>navigate(`/project-dashboard`,{
                state:{project}
              })}
              >
             <div className='card flex flex-col justify-center'>
                <div className="card-top flex justify-between ">
                  <div>

                  <h1 className='text-2xl poppins font-semibold'>{project.name.toUpperCase()}</h1>
                  </div>
               
                <div className="badge">
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">in Progress</span>
                </div>
                </div>
              <div className="card-middle">
                <div className="card-desc text-sm poppins text-black/60 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat numquam iure dolorem laudantium beatae iste. Natus nemo harum ullam nulla?
                </div>
              </div>

             </div>
            </div>
            )
          })
        }
        </div>
      </div>
      {modal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg shadow-lg p-4 w-1/2" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Create Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-gray-600" htmlFor="name">Project Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter project name"
                  className="bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className='flex gap-3'>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
                Create
              </button>
              <button onClick={handleCloseModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-red-500">
                Close
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;