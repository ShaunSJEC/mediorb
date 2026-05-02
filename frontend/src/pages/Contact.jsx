import React from 'react'

const Contact = () => {
  return (
    <div className='my-10'>
      <p className='text-center text-2xl font-medium text-gray-700'>CONTACT <span className='text-gray-900'>US</span></p>
      <div className='flex flex-col md:flex-row justify-center gap-12 my-10 mb-28 text-sm'>
        <div className='bg-primary/10 w-full md:max-w-96 h-64 rounded-lg flex items-center justify-center text-primary font-bold'>Image Placeholder</div>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>00000 Willms Station <br /> Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br /> Email: support@mediorb.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
