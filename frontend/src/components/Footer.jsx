import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <p className='text-2xl font-bold text-primary mb-5'>MediOrb</p>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>MediOrb is your trusted partner in hospital management and doctor-patient connectivity. We streamline bookings and healthcare operations for a better tomorrow.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>support@mediorb.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @ MediOrb - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
