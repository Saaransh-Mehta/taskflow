
import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../context/user.context.jsx';
import login3d from '../assets/loginPage.png'
// import {Button} from '../lib/components/ui/button.js'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/api/login',{
        email,
        password
    }).then((res)=>{
      console.log(res.data)
        login(res.data.user)
        localStorage.setItem('token',res.data.token)
        toast.success("User logged in successfully")
        setTimeout(()=>{
            navigate('/dashboard');

        },2000)
    })
    .catch((err)=>{
        toast.error(err.response.data.message)
    })

    
  
    
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center bg-gray-100 items-center">
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className=" p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl text-black poppins font-bold mb-4">Hello, <br/> Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-black poppins" htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-gray-700 poppins p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-black poppins" htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
         Login
          </button>
          <p className="text-black poppins">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700 bold">Register</Link>
          </p>
        </form>
      </div>
      
    </div>
  );
};

export default Login;