import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
    const Navgate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        toast.success("Logout successfull")
        Navgate("/login")
    }

    return (
        <header >
            <nav className='flex justify-between text-White max-w-[80%] mx-auto pt-8'>
                <h1 className='font-bold text-2xl'>My <span className='text-Blue uppercase'>wallet 😊</span></h1>
                <div className='flex items-center justify-between gap-4'>
                    <NavLink to={"/comming-soon"}>QR</NavLink>
                    <button type='button'
                        className='bg-blue-700 text-black py-[0.4rem] px-4 rounded font-medium hover:bg-blue-500 transition-all duration-300'
                        onClick={handleLogout}
                    >Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default Header