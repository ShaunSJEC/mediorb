import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

    const { aToken, setAToken } = useContext(AdminContext)
    const { dToken, setDToken } = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white shadow-sm'>
            <div className='flex items-center gap-2 text-xs'>
                <p className='text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity' onClick={() => navigate('/')}>MediOrb</p>
                <p className='border px-2.5 py-0.5 rounded-full border-primary text-primary bg-primary/10 font-medium'>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-8 py-2.5 rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-md'>Logout</button>
        </div>
    )
}

export default Navbar
