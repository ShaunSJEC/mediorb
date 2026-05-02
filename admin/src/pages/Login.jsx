import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'

const Login = () => {

    const [state, setState] = useState('Admin')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setAToken, backendUrl } = useContext(AdminContext)
    const { setDToken } = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('aToken', data.token)
                    setAToken(data.token)
                } else {
                    toast.error(data.message)
                }
            } else {
                const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center bg-gray-50'>
            <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-100 rounded-2xl text-[#5E5E5E] text-sm shadow-2xl bg-white'>
                <p className='text-3xl font-bold m-auto text-gray-800'><span className='text-primary'>{state}</span> Login</p>
                <div className='w-full mt-4'>
                    <p className='font-medium text-gray-700 mb-1'>Email Address</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:ring-2 focus:ring-primary/20 transition-all outline-none' type="email" required placeholder="Enter your email" />
                </div>
                <div className='w-full mb-2'>
                    <p className='font-medium text-gray-700 mb-1'>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:ring-2 focus:ring-primary/20 transition-all outline-none' type="password" required placeholder="••••••••" />
                </div>
                <button className='bg-primary text-white w-full py-3 rounded-lg text-base font-semibold hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-md'>Login securely</button>
                <div className='w-full text-center mt-4 pt-4 border-t border-gray-100'>
                {
                    state === 'Admin'
                        ? <p>Doctor Login? <span className='text-primary font-medium cursor-pointer hover:underline' onClick={() => setState('Doctor')}>Click here</span></p>
                        : <p>Admin Login? <span className='text-primary font-medium cursor-pointer hover:underline' onClick={() => setState('Admin')}>Click here</span></p>
                }
                </div>
            </div>
        </form>
    )
}

export default Login
