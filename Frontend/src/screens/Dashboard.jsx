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
    <main className="p-4">
      <Toaster position='top-center'/>
      <div className="projects gap-5 ">
        <button className="project border  border-slate-300 rounded p-3" onClick={() => setModal(true)}>
          New Project
          <i className="p-1 ri-link"></i>
        </button>

        {
          projects.map((project,index)=>{
            return(
              <div className='flex flex-col gap-4 border border-slate-300 rounded p-3 w-52 hover:bg-slate-200 transition'
              onClick={()=>navigate(`/project`,{
                state:{project}
              })}
              >
              <button key={index} className="project">
                {project.name}
                <i className="p-1 ri-link"></i>
              </button>
              <div className='flex gap-2'>
                     <p><i className="ri-user-line"></i> Collaborators: {project.users.length}
                       </p>
              </div>
            </div>
            )
          })
        }
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