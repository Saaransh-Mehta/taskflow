// Frontend/src/screens/Register.jsx
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast'

const Register = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/api/register', {
        username,
        email,
        password
    }).then((res)=>{
      localStorage.setItem('token', res.data.token)
        toast.success("User registered successfully")
        navigate('/login');
    })
    .catch((err)=>{
        toast.error(err.response.data.message)
    })
    

   
    
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex justify-center items-center">
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl text-white font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-white" htmlFor="name">Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-white" htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-white" htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-white" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            Register
          </button>
          <p className="text-white">
            Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;