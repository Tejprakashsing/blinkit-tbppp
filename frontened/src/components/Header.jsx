import React from 'react'
import logo from '../assets/logo.png'
import { Link ,useLocation,useNavigate} from 'react-router-dom'
import Search from './Search.jsx'
import {FaRegCircleUser} from 'react-icons/fa6';
import useMobile from '../hooks/useMobile.jsx';
import {BsCart4} from "react-icons/bs";
import { useSelector } from 'react-redux';


const Header = () => {
    const [isMobile] = useMobile();
    const location = useLocation();
    const isSearchPage = location.pathname === "/search"
    const navigate = useNavigate()
    const user = useSelector((state)=> state?.user)

    console.log('user from store',user)

    const redirectToLoginPage =() =>{
        navigate('/login')
    }


  return (
    <header className='h-20 shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
        {
            !(isSearchPage && isMobile) && (
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
            <div className='hidden lg:block'>
                <Search/>
            </div>

            <div className=''>
                <button className='text-neutral-600 lg:hidden'>
                    <FaRegCircleUser size={26}/>
                </button>
                <div className='hidden lg:flex items-center gap-10'>
                    <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
                    <button className='flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-3 rounded text-white'>
                        <div className='animate-bounce'>
                            <BsCart4 size={26}/>
                        </div>
                        <div className='font-semibold'>
                            <p>My Cart</p>
                        </div>
                    </button>
                </div>
            </div>   
        </div>
            )
        }
        <div className='container mx-auto px-2 lg:hidden'>
            <Search/>
        </div>    

    </header>
  )
}

export default Header
