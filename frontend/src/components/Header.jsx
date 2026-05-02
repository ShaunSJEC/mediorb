import React from 'react'
import { ArrowRight } from 'lucide-react'
import heroImg from '../assets/hero.png'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <ArrowRight size={20} />
                </a>
            </div>
            <div className='md:w-1/2 relative'>
                <div className='w-full h-64 md:h-full mt-10 md:mt-0 flex items-end justify-center overflow-hidden'>
                    <img src={heroImg} alt='Hero image' className='object-cover w-full h-auto max-h-[80%] rounded-lg drop-shadow-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Header
