import React from 'react'

const UsesTools = () => {
  return (
    <div className='w-full'>
        <div className='text-black font-medium text-xl font-[Poppins] p-1 pt-7 pb-3 '>More Useful Tools</div>
         <div className='flex w-full'>
            <div className='w-1/2 pr-3 min-h-14 flex'> 
              <div className='flex h-full w-full bg-[#DFF7FF] shadow-sm rounded-2xl p-3 items-center '>
                <div className='h-[35px] w-[35px] rounded-full bg-[#3F81FD] flex justify-center items-center'>
                    <i className='fa fa-headset text-white'></i>
                </div>
                <span className='italic text-black font-semibold px-3'>SUPPORT</span>
              </div>
            </div>
            <div className=' w-1/2 pl-3 min-h-14 flex'>
              <div className='flex h-full w-full bg-[#FFDFDF] shadow-sm rounded-2xl p-3 items-center'>
                <div className='h-[35px] w-[35px] rounded-full bg-[#F9676E] flex justify-center items-center'>
                <i className="fa-solid fa-gift text-white" />    
                </div>
                <span className='italic text-black font-semibold px-3'>REDEEM</span>
              </div>
            </div>
         </div>
    </div>
  )
}

export default UsesTools