import React from 'react'
import Navbar   from '../components/Navbar'
import { FaArrowRight } from "react-icons/fa";
import '../App.css'



const Home = () => {
  return (
    <>
      <Navbar/>
    
    <div className='flex justify-center min-h-screen  bg-gray-100'>
      <div className='top'>

      <div className='badge mt-20  border-2 flex items-center p-3 rounded-lg'>
    

      <span class="bg-green-200 roboto tracking-ide text-green-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg ">Updated</span>
      <span className='text-sm flex items-center gap-3 roboto tracking-wide'>New Version of TaskFlow is here <FaArrowRight /></span>
     
      </div>
      </div>
    </div>
    </>
  )
}

export default Home