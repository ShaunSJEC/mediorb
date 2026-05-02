import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { Briefcase, CalendarDays, UserCheck, ListOrdered } from 'lucide-react'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const { dToken, dashData, getDashData, completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-4'>
        <div className='flex items-center gap-4 bg-white p-6 min-w-52 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <div className='p-3 bg-primary/10 rounded-full'>
            <Briefcase size={32} className='text-primary' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>{currency} {dashData.earnings}</p>
            <p className='text-sm text-gray-500 font-medium uppercase tracking-wider'>Earnings</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-6 min-w-52 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <div className='p-3 bg-primary/10 rounded-full'>
            <CalendarDays size={32} className='text-primary' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>{dashData.appointments}</p>
            <p className='text-sm text-gray-500 font-medium uppercase tracking-wider'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-6 min-w-52 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
          <div className='p-3 bg-primary/10 rounded-full'>
            <UserCheck size={32} className='text-primary' />
          </div>
          <div>
            <p className='text-2xl font-bold text-gray-800'>{dashData.patients}</p>
            <p className='text-sm text-gray-500 font-medium uppercase tracking-wider'>Patients</p>
          </div>
        </div>
      </div>

      <div className='bg-white mt-10 rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
        <div className='flex items-center gap-2.5 px-6 py-5 bg-gray-50 border-b'>
          <ListOrdered size={20} className='text-gray-600' />
          <p className='font-bold text-gray-800 text-lg'>Latest Bookings</p>
        </div>

        <div className='divide-y divide-gray-100'>
          {
            dashData.latestAppointments.map((item, index) => (
              <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-colors' key={index}>
                <img className='rounded-full w-12 h-12 object-cover border-2 border-primary/20' src={item.userData.image} alt="" />
                <div className='flex-1'>
                  <p className='text-gray-900 font-semibold'>{item.userData.name}</p>
                  <p className='text-gray-500 text-sm mt-0.5'>{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled 
                ? <span className='px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider'>Cancelled</span>
                : item.isCompleted 
                  ? <span className='px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold uppercase tracking-wider'>Completed</span>
                  : <div className='flex gap-2'>
                      <button onClick={() => cancelAppointment(item._id)} className='text-red-500 text-sm font-medium cursor-pointer hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors'>Cancel</button>
                      <button onClick={() => completeAppointment(item._id)} className='text-green-500 text-sm font-medium cursor-pointer hover:bg-green-50 px-3 py-1.5 rounded-lg transition-colors'>Complete</button>
                    </div>
              }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
