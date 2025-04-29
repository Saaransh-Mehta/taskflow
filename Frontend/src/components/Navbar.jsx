import React, { useContext } from 'react'
import '../App.css'
import { MdAddTask } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context.jsx';

const Navbar = () => {
  const { isLoggedIn } = useContext(UserContext); 
  const {user} = useContext(UserContext)
  console.log(user)
  const navigate = useNavigate();
  
  return (
    <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm roboto tracking-wide'>
      <div className='pl-14 flex gap-1 items-center cursor-pointer' >
        <div className='logo'><MdAddTask/></div>
        <div className='cursor-pointer'>TaskFlow</div>
      </div>
      <div className='cursor-pointer '>
        <ul className='flex gap-5'>
          <li className='pr-2' onClick={()=>navigate('/features')}>Features</li>
          <li>Pricing </li>
          <li>Resources</li>
          <li>About</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className='pr-10 cursor-pointer flex gap-6'>
        {isLoggedIn ? <><div className='flex justify-center items-center text-black'>{user.email}</div></> : null}
        {isLoggedIn ? <><button className='bg-red-500 hover:bg-red-600 p-3 rounded-xl duration-200'   onClick={()=>console.log("Logout Clicked")}>Logout</button></> : <> <button onClick={()=>navigate('/login')}>Login</button> <button onClick={()=>navigate('/register')} className='bg-purple-600 text-white p-2 rounded-xl'>Signup</button></>}
      </div>
    </div>
  )
}

export default Navbar