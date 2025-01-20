import React from 'react'
import logo from '../assets/logo.png'
import { Link ,useLocation,useNavigate} from 'react-router-dom'
import Search from './Search.jsx'


const Header = () => {
  return (
    <header className='h-20 shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
        
        <div className='container mx-auto flex items-center px-2 justify-between'>
            {/**logo */}
            <div className='h-full'>
                <Link to={"/"} className='h-full flex justify-center items-center'>
                    <img 
                        src={logo} 
                        width={170}
                        height={60}
                        alt='logo'
                        className='hidden lg:block'
                    />
                    <img 
                        src={logo}
                        width={120}
                        height={60}
                        alt='logo'
                        className='lg:hidden'
                    />
                </Link>
            </div>

            {/**Search */}
            <div>
                <Search/>
            </div>

            
        </div>
        

    </header>
  )
}

export default Header
