import React from 'react'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {

    const specialityData = [
        { speciality: 'General physician' },
        { speciality: 'Gynecologist' },
        { speciality: 'Dermatologist' },
        { speciality: 'Pediatricians' },
        { speciality: 'Neurologist' },
        { speciality: 'Gastroenterologist' },
    ]

    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-scroll pb-4'>
                {specialityData.map((item, index) => (
                    <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                        <div className='w-20 h-20 sm:w-28 sm:h-28 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-center p-2 shadow-sm hover:shadow-md transition-shadow hover:bg-primary/20'>
                            {item.speciality}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
