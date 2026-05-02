import React from 'react'

const About = () => {
  return (
    <div className='my-10'>
      <p className='text-center text-2xl font-medium text-gray-700'>ABOUT <span className='text-gray-900'>US</span></p>
      <div className='flex flex-col md:flex-row gap-12 my-10'>
        <div className='flex-1 bg-primary/10 h-64 rounded-lg flex items-center justify-center text-primary font-bold'>Image Placeholder</div>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MediOrb, your number one source for all things healthcare. We're dedicated to giving you the very best of service, with a focus on reliability, customer service, and uniqueness.</p>
          <p>MediOrb is a comprehensive, responsive web application designed to streamline doctor-patient appointment bookings and hospital management.</p>
        </div>
      </div>
    </div>
  )
}

export default About
