import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import toast , {Toaster} from 'react-hot-toast';

function App() {
  return (
    <>
    <Header />
    <main className='min-h-[78vh]'>
      <Home />
      <Outlet />
    </main>
    <Footer />
    <Toaster/>
    </>
  
    
  )
}

export default App