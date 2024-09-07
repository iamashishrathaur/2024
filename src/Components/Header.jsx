import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Header = ({name,isBackPress}) => {
  const navigate = useNavigate();
  return (
    <div className='bg-white w-full min-h-12 shadow-sm text-black z-[999] sticky left-0 top-0 flex'>
      {isBackPress ? 
       <div className='w-1/4 flex items-center p-2 px-4' >
          <IoIosArrowBack size={'25px'} className='cursor-pointer' onClick={()=>navigate(-1)}/>
       </div> :''
    }
       <div className={`flex items-center justify-center ${isBackPress ? 'w-1/2':'w-full'}`}>
           <span className='text-center text-lg p-2'>{name}</span>
       </div>
    </div>
  )
}

export default Header