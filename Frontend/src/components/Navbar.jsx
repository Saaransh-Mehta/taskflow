import React from 'react'
import '../App.css'
import { MdAddTask } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm roboto tracking-wide'>
      <div className='pl-14 flex gap-1 items-center cursor-pointer' >
        <div className='logo'><MdAddTask/></div>
        <div className='cursor-pointer'>TaskFlow</div>
      </div>
      <div className='cursor-pointer '>
        <ul className='flex gap-5'>
          <li className='pr-2'>Features</li>
          <li>Pricing </li>
          <li>Resources</li>
          <li>About</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className='pr-10 cursor-pointer flex gap-6'>
        <button>Login</button>
        <button className='bg-purple-600 text-white p-2 rounded-xl'>Signup</button>
      </div>
    </div>
  )
}

export default Navbar