import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Dashboard from '../screens/Dashboard'
import Project from '../screens/Project'
import UserAuth from '../auth/UserAuth'
import Home from '../screens/Home'
import Features from '../screens/Features'
import Blogs from '../screens/Blogs'
import ProjectDashboard from '../screens/ProjectDashboard'
import AfterLoginNavbar from '../screens/AfterLoginNavbar'
import Navbar from '../components/Navbar'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>} />
    <Route path="/dashboard" element={<UserAuth><Dashboard/></UserAuth>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>} />
    <Route path='/project' element={<UserAuth> <Project/> </UserAuth> }/>
    <Route path='/features' element={<Features/>} />
    <Route path='/blogs' element={<Blogs/>} />
    <Route path='/project-dashboard' element={<UserAuth><ProjectDashboard/></UserAuth>} />
    <Route path="/navbar-2"  element={<AfterLoginNavbar/>} />


    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes