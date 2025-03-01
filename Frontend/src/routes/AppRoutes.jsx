import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Dashboard from '../screens/Dashboard'
import Project from '../screens/Project'
import UserAuth from '../auth/UserAuth'
import Home from '../screens/Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/dashboard" element={<UserAuth><Dashboard/></UserAuth>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>} />
    <Route path='/project' element={<UserAuth> <Project/> </UserAuth> }/>


    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes