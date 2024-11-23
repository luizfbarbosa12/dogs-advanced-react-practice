import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './login-form'
import LoginCreate from './login-create'
import LoginLostPassword from './login-lost-password'
import LoginResetPassword from './login-reset-password'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='perdeu' element={<LoginLostPassword />} />
        <Route path='resetar' element={<LoginResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login
