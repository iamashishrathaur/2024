import { FaAngleRight } from 'react-icons/fa6'
import BottomNavigation from '../Components/BottomNavigation'
import VIP from '../assets/VIP.webp'
import Avatar from '../assets/avatar.webp'

const My = () => {
  return (
    <>
    <div>
       <div className='bg-slate-300 w-full min-h-56'>
         <div className='p-5 pt-10 flex items-center'>
         <div className='bg-orange-100 h-16 w-16 rounded-full shadow-sm flex items-center justify-center'>
          <img src={Avatar} width={100} alt="user" className='rounded-full'/>
         </div>
          
          <div className='ms-5 text-black text-lg font-bold'>7905321205</div>

          <div className='absolute w-[150px] right-5'>
            <img src="" alt="" srcSet={VIP} />
          </div>

         </div>

       </div>
      <div className='p-5 pb-52 -mt-20'>
         <div className='bg-white w-full flex min-h-32 rounded-xl shadow-lg text-[#333] text-sm p-5'>
              <div className='w-1/2 border-r'>
                 <div><button>Withdraw</button></div>
              </div>
              <div className='w-1/2l'></div>
         </div>

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
         
         {/* <div className=''></div> */}
      </div>

   </div>
    
    <BottomNavigation/>
    </>
  )
}

export default My