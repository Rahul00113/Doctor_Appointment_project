import React from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import Login from '../Authentication/Login/Login'
import Registration from '../Authentication/Registration/Registration'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'
import Header from '../Layout/Header'
import Find_doctor from '../Components/Find_doctor/Find_doctor'

import Appointment from '../Components/Appointment/Appointment'
import ProtectedRoutes from './ProtectedRoutes'
import PNF from '../Components/PNF/PNF'


const RootRoutes = () => {
  return (
    <Router>
        <Header />
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About />} />
           
            <Route element={<ProtectedRoutes />}> 
            <Route path='find_doc' element={<Find_doctor />} />
            <Route path='appoin/:sid' element={<Appointment/>} />
            </Route>
            
            <Route path="*" element={<PNF />} />

        </Routes>
    </Router>
  )
}

export default RootRoutes