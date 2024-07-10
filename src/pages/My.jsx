import React from 'react'
import { FaAngleLeft, FaList } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'
import BottomNavigation from '../Components/BottomNavigation'

const My = () => {
  return (
    <>
    <div>
       <div className='bg-slate-300 w-full min-h-56'>
         <div className='p-10'>
         <div className='bg-orange-100 h-16 w-16 rounded-full shadow-sm'></div>
         </div>

       </div>
      <div className='p-5 pb-52 -mt-20'>
         <div className='bg-white w-full min-h-32 rounded-xl shadow-lg text-[#333] text-sm'></div>

         <div className='bg-white w-full min-h-64 rounded-xl shadow-lg text-[#333] text-sm mt-5'>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-pen-nib text-red-500 text-xl"> </i> <span className='ml-4'>My Order</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px]  border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-clipboard-list text-teal-400 text-xl"> </i> <span className='ml-4'>Transaction</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-users text-cyan-400 text-xl"> </i> <span className='ml-4'>My Team</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-credit-card text-blue-400 text-xl"> </i> <span className='ml-4'>Bank Account</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-lock text-fuchsia-400 text-xl"> </i> <span className='ml-4'>Password</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-shield text-red-400 text-xl"> </i> <span className='ml-4'>Withdraw Password</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-clipboard-list text-green-400 text-xl"> </i> <span className='ml-4'>Logout</span>
               </div>
               <div><FaAngleRight color='#333'/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
         </div>
         
         <div className=''></div>
      </div>

   </div>
    
    <BottomNavigation/>
    </>
  )
}

export default My