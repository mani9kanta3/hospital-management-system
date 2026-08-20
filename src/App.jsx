import React from 'react'
import './App.css'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Footer from './Footer'
import PatientRegistration from './PatientRegistration'
import LoginPage from './LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appointment from './Appointment'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'
import ForgotPassword from './ForgotPassword'
import SignupPage from './SignupPage'
import Doctors from './Doctors'
import SingleDoctor from './SingleDoctor'
import Contact from './Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/doctors' element={<ProtectedRoute><Doctors/></ProtectedRoute>} />
      <Route path='/doctors/:id' element={<ProtectedRoute><SingleDoctor/></ProtectedRoute>} />
      <Route path='/registration' element={<ProtectedRoute><PatientRegistration/></ProtectedRoute>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/appointment' element={<ProtectedRoute><Appointment/></ProtectedRoute>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App