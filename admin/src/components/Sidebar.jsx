import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { LayoutDashboard, CalendarDays, UserPlus, Users, Briefcase } from 'lucide-react'

const Sidebar = () => {

    const { aToken } = useContext(AdminContext)
    const { dToken } = useContext(DoctorContext)

    return (
        <div className='min-h-screen bg-white border-r shadow-md'>
            {
                aToken && <ul className='text-[#515151] mt-5'>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/admin-dashboard'}>
                        <LayoutDashboard size={20} />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/all-appointments'}>
                        <CalendarDays size={20} />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/add-doctor'}>
                        <UserPlus size={20} />
                        <p className='hidden md:block'>Add Doctor</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/doctor-list'}>
                        <Users size={20} />
                        <p className='hidden md:block'>Doctors List</p>
                    </NavLink>
                </ul>
            }
            {
                dToken && <ul className='text-[#515151] mt-5'>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/doctor-dashboard'}>
                        <LayoutDashboard size={20} />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/doctor-appointments'}>
                        <CalendarDays size={20} />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 hover:bg-[#F2F3FF] hover:text-primary ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary text-primary font-medium' : ''}`} to={'/doctor-profile'}>
                        <Briefcase size={20} />
                        <p className='hidden md:block'>Profile</p>
                    </NavLink>
                </ul>
            }
        </div>
    )
}

export default Sidebar
