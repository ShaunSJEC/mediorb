import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <p onClick={() => navigate('/')} className='text-2xl font-bold text-primary cursor-pointer'>MediOrb</p>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/' className={({isActive}) => isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary transition-colors"}>
                    <li className='py-1'>HOME</li>
                </NavLink>
                <NavLink to='/doctors' className={({isActive}) => isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary transition-colors"}>
                    <li className='py-1'>ALL DOCTORS</li>
                </NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary transition-colors"}>
                    <li className='py-1'>ABOUT</li>
                </NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary transition-colors"}>
                    <li className='py-1'>CONTACT</li>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                <SignedIn>
                    <div className='flex items-center gap-4'>
                        <button onClick={() => navigate('/my-appointments')} className='bg-primary text-white px-4 py-2 rounded-full hidden md:block'>My Appointments</button>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </SignedIn>
                <SignedOut>
                    <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
                </SignedOut>
            </div>
        </div>
    )
}

export default Navbar
