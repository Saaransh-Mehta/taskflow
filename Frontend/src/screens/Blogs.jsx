import React from 'react'
import Navbar from '../components/Navbar'

const Blogs = () => {
  return (
    <>
    <Navbar/>
    <div className='top-section flex flex-col justify-center items-center'>
        <span className='lilita-one text-6xl pt-10'>TaskFlow Blogs</span>
        <span className='lilita-one text-xl pt-5'>Learn more with our blog.</span>
    </div>
    <div className='blog-section grid grid-cols-3 gap-5 place-items-center'>
        <div>Grid 1</div>
        <div>Grid 2</div>
        <div>Grid 3</div>
    </div>
    </>
  )
}

export default Blogs