import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'


const Header = ({name}) => {
  return (
    <div className='bg-white w-full min-h-12 shadow-sm text-black z-[999] sticky left-0 top-0 flex'>
       {/* <div className='w-1/4 flex items-center p-4' >
          <IoIosArrowBack size={'25px'} className='cursor-pointer'/>
       </div> */}
       <div className='w-full flex items-center justify-center'>
           <span className='text-center text-lg p-2'>{name}</span>
       </div>
    </div>
  )
}

export default Header