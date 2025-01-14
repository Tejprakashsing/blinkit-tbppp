import React from 'react'
import Home from './components/Navbar'
import Login from './components/Login'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import axios from 'axios'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Login />} />
  </Routes>
  )
}

export default App