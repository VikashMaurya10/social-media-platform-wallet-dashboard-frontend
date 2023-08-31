import React from 'react'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './routes/Dashboard';
import NotFound from './components/NotFound';
import ComingSoon from './components/CommingSoon';

function App() {

  const ValidUserName = (username) => {
    return Boolean(username.trim().length > 0)
  }

  const ValidateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return Boolean(re.test(email));
  };

  const PasswordStrength = (password) => {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,24})(?=.*[0-9])(?=.*[@$!%*#?&])/;
    return Boolean(re.test(password));
  };


  return (
    <div className='min-h-screen bg-gradient-to-t from-Black to-Green'>
      <Routes>
        <Route path="/" element={<Signup _this={{
          ValidUserName,
          ValidateEmail,
          PasswordStrength
        }} />} />

        <Route path="/login" element={<Login
          _this={{
            ValidUserName,
            ValidateEmail,
            PasswordStrength
          }}
        />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/comming-soon' element={<ComingSoon />} />
        <Route path='/*' element={<NotFound />} />
      </Routes >
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div >
  )
}

export default App
