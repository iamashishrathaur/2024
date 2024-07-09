import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'


const Header = () => {
  return (
    <div className='bg-white shadow-md w-full text-black z-10 sticky left-0 top-0 flex'>
       <div className='w-1/4 flex items-center p-4' >
          <IoIosArrowBack size={'25px'} className='cursor-pointer'/>
       </div>
       <div className='w-[50%] flex items-center justify-center'>
           <span className='text-center text-base sm:text-lg'>Home</span>
       </div>
    </div>
  )
}

export default Header